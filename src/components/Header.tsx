import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useEventCategory } from "@/context/EventCategoryContext";
import axios from "axios";
import PopUp from "./PopUp";
import { EventType } from "@/types";

const monthMap: { [key: string]: number } = {
  Јануари: 1,
  Февруари: 2,
  Март: 3,
  Април: 4,
  Мај: 5,
  Јуни: 6,
  Јули: 7,
  Август: 8,
  Септември: 9,
  Октомври: 10,
  Ноември: 11,
  Декември: 12,
};

const Header = () => {
  const { setActiveCategory } = useEventCategory();
  const [open, setOpen] = useState(false);
  const [nextEvent, setNextEvent] = useState<EventType | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<EventType[]>(
          "http://localhost:5001/events"
        );
        const events: EventType[] = response.data;

        const currentDate = new Date();

        const sortedEvents = events.sort((a: EventType, b: EventType) => {
          const dateA = new Date(
            Number(a.dateYear),
            monthMap[a.dateMonth] - 1,
            Number(a.dateDay)
          );
          const dateB = new Date(
            Number(b.dateYear),
            monthMap[b.dateMonth] - 1,
            Number(b.dateDay)
          );
          return dateA.getTime() - dateB.getTime();
        });

        const nextEvent = sortedEvents.find((event) => {
          const eventDate = new Date(
            Number(event.dateYear),
            monthMap[event.dateMonth] - 1,
            Number(event.dateDay)
          );
          return eventDate >= currentDate;
        });

        setNextEvent(nextEvent || null);
        setFetchError(null);
      } catch (error) {
        console.error("Error fetching events:", error);
        setFetchError("Не можеме да ги вчитаме настаните во моментов.");
      }
    };

    fetchEvents();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const daysUntilNextEvent = nextEvent
    ? Math.ceil(
        (new Date(
          Number(nextEvent.dateYear),
          monthMap[nextEvent.dateMonth] - 1,
          Number(nextEvent.dateDay)
        ).getTime() -
          new Date().getTime()) /
          (1000 * 3600 * 24)
      )
    : null;

  return (
    <nav className="headerNav">
      <Link href="/">
        <img src="/logo.svg" alt="Logo" />
      </Link>
      <ul>
        <li>
          Информативни Содржини
          <ul className="dropdownNav">
            <Link className="link-about-us" href="/aboutus">
              <li>За Нас</li>
            </Link>
            <li>Членство</li>
            <li>Огранок на коучинг</li>
            <li>Галерии</li>
            <li>Огласи за работа</li>
            <li>HR награди</li>
            <li>е-весник</li>
            <li>Архива</li>
            <li>FAQ</li>
          </ul>
        </li>
        <li>
          Едукативни Содржини
          <ul className="dropdownNav dropdownNavEducation">
            <li>Статии</li>
            <li>Истражувања</li>
            <li>Интервјуа</li>
            <li>Обуки</li>
            <li>Македонски Академии</li>
            <li>Проекти</li>
            <li>Експерти</li>
            <li>Трендови</li>
          </ul>
        </li>
        <Link className="mr-right" href="/events/conference">
          <li>Годишна Конференција</li>
        </Link>
        <Link className="mr-right" href="/events">
          <li>
            Настани
            <ul className="dropdownNav dropdownNavEvents">
              <li onClick={() => setActiveCategory("HR кафе")}>HR caffee</li>
              <li onClick={() => setActiveCategory("HR викенд")}>HR weekend</li>
              <li onClick={() => setActiveCategory("Вебинар")}>HR webinar</li>
              <li onClick={() => setActiveCategory("Годишна конференција")}>
                HR conferences
              </li>
            </ul>
          </li>
        </Link>
        <Link className="mr-right" href="/blogs">
          <li>Блог</li>
        </Link>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
      </ul>
      <ul>
        <li className="dotOnBell" onClick={handleOpen}>
          <FontAwesomeIcon icon={faBell} />
          <div className="notificationDot"></div>
        </li>
        <li>MK / EN</li>
        <li>
          <Link href="/signup">
            <button className="btn-on-hover">зачлени се</button>
          </Link>
        </li>
      </ul>
      {fetchError ? (
        <p>{fetchError}</p>
      ) : (
        <PopUp
          open={open}
          handleClose={handleClose}
          nextEvent={nextEvent}
          number={daysUntilNextEvent}
        />
      )}
    </nav>
  );
};

export default Header;
