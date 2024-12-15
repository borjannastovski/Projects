import { AgendaItem, EventType } from "@/types";
import React, { useState } from "react";

const monthMapping: Record<string, string> = {
  Јануари: "01",
  Февруари: "02",
  Март: "03",
  Април: "04",
  Мај: "05",
  Јуни: "06",
  Јули: "07",
  Август: "08",
  Септември: "09",
  Октомври: "10",
  Ноември: "11",
  Декември: "12",
};

const dayOfWeekMapping: Record<string, string> = {
  Sunday: "Недела",
  Monday: "Понеделник",
  Tuesday: "Вторник",
  Wednesday: "Среда",
  Thursday: "Четврток",
  Friday: "Петок",
  Saturday: "Сабота",
};

const getDayOfWeek = (day: string, month: string, year: string) => {
  const monthNumber = monthMapping[month];

  if (!monthNumber) {
    return "Invalid month";
  }
  const dateString = `${year}-${monthNumber}-${day.padStart(2, "0")}`;
  const dateObj = new Date(dateString);

  if (isNaN(dateObj.getTime())) {
    return "Invalid date";
  }

  const dayOfWeekEnglish = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(dateObj);

  return dayOfWeekMapping[dayOfWeekEnglish] || "Unknown day";
};

interface Props {
  data: EventType;
}

const Agenda: React.FC<Props> = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2" | "single">(
    data.conferenceDay1 || data.conferenceDay2 ? "day1" : "single"
  );

  const renderAgendaItem = (item: AgendaItem) => {
    const hasPause = item.theme.includes("Пауза");

    return (
      <div key={item.id} className={`agenda-item ${hasPause ? "pause" : ""}`}>
        <h6 className="hour">{item.hour}</h6>
        <div className="right">
          <h6 className="theme">{item.theme}</h6>
          <ul>
            {item.description.map((desc, index) => (
              <li key={index}>
                {Array.isArray(desc) ? (
                  <p>
                    {desc[0]}: <span className="orange"> {desc[1]} </span>
                  </p>
                ) : (
                  desc
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const handleDayChange = (day: "day1" | "day2" | "single") => {
    setSelectedDay(day);
  };

  return (
    <section className="agenda">
      <h1>Агенда на настанот</h1>
      <div className="days">
        {(data.conferenceDay1 || data.conferenceDay2) && (
          <div className="days-list">
            <h5
              className={selectedDay === "day1" ? "active" : ""}
              onClick={() => handleDayChange("day1")}
            >
              Ден 1
            </h5>
            <h5
              className={selectedDay === "day2" ? "active" : ""}
              onClick={() => handleDayChange("day2")}
            >
              Ден 2
            </h5>
          </div>
        )}
        {selectedDay === "single" && (
          <div className="days-list">
            <h5>
              {getDayOfWeek(data.dateDay, data.dateMonth, data.dateYear)} -{" "}
              {data.dateDay} {data.dateMonth}
            </h5>
          </div>
        )}

        {selectedDay === "day1" && data.conferenceDay1 ? (
          data.conferenceDay1.length ? (
            data.conferenceDay1.map(renderAgendaItem)
          ) : (
            <p>No agenda items for Day 1</p>
          )
        ) : selectedDay === "day2" && data.conferenceDay2 ? (
          data.conferenceDay2.length ? (
            data.conferenceDay2.map(renderAgendaItem)
          ) : (
            <p>No agenda items for Day 2</p>
          )
        ) : data.eventAgenda?.length ? (
          data.eventAgenda.map(renderAgendaItem)
        ) : (
          <p>No agenda items available</p>
        )}
      </div>
    </section>
  );
};

export default Agenda;
