import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Event = {
  id: string;
  type: string;
  title: string;
  slug: string;
  dateYear: string;
  dateMonth: string;
  dateDay: string;
  img: string;
  description: string;
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const monthMap: { [key: string]: number } = {
  Јануари: 0,
  Февруари: 1,
  Март: 2,
  Април: 3,
  Мај: 4,
  Јуни: 5,
  Јули: 6,
  Август: 7,
  Септември: 8,
  Октомври: 9,
  Ноември: 10,
  Декември: 11,
};

const CalendarComponent = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:5001/events");
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const tileClassName = ({ date }: { date: Date }) => {
    const eventDates = events.map((event) => {
      const monthNumber = monthMap[event.dateMonth];
      const eventDate = new Date(
        parseInt(event.dateYear),
        monthNumber,
        parseInt(event.dateDay)
      );
      return eventDate.toDateString();
    });

    return eventDates.includes(date.toDateString()) ? "event-date" : "";
  };

  useEffect(() => {
    if (value instanceof Date) {
      const selectedDate = value.toDateString();
      const filteredEvents = events.filter((event) => {
        const monthNumber = monthMap[event.dateMonth];
        const eventDate = new Date(
          parseInt(event.dateYear),
          monthNumber,
          parseInt(event.dateDay)
        );
        return eventDate.toDateString() === selectedDate;
      });
      setSelectedEvents(filteredEvents);
      setSelectedDate(
        `${value.getDate()} / ${value.getMonth() + 1} / ${value.getFullYear()}`
      );
    }
  }, [value, events]);

  return (
    <section className="calendar">
      <div className="info">
        <h1>Календар со датуми за сите претстојни настани</h1>
        <p>
          Погледни ги сите настани распоредени на календар. Со клик на
          обележаните настани можеш да дознаеш повеќе информации за секој од
          настаните, но за целосни информации упатете се до индивидуалната
          страна на настанот.
        </p>
      </div>
      <div className="event-calendar">
        <div className="left">
          <h3>Избрана Дата: {selectedDate}</h3>
          {selectedEvents.length > 0 ? (
            <ul>
              {selectedEvents.map((event) => (
                <Link key={event.id} href={`/events/${event.slug}`}>
                  <li>
                    {event.type}: {event.title}
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p>Нема настани за овој ден.</p>
          )}
        </div>
        <div className="right">
          <h3>Избери Дата</h3>
          <ReactCalendar
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarComponent;
