import { EventType } from "@/types";
import React, { useState } from "react";
import HoverCard from "./HoverCard";

interface Props {
  data: EventType[];
  activeCategory: string;
}

const EventsList: React.FC<Props> = ({ data, activeCategory }) => {
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const filteredEvents =
    activeCategory === "Сите"
      ? data
      : data.filter((event) => event.type === activeCategory);

  const searchFilteredEvents = filteredEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedEvents = searchFilteredEvents.reduce(
    (acc: Record<string, EventType[]>, event) => {
      if (!acc[event.type]) {
        acc[event.type] = [];
      }
      acc[event.type].push(event);
      return acc;
    },
    {}
  );

  const toggleShowAll = (type: string) => {
    setShowAll((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(inputValue);
    }
  };

  React.useEffect(() => {
    setInputValue("");
    setSearchQuery("");
  }, [activeCategory]);

  return (
    <section className="event-list">
      <div className="header">
        <h2>{activeCategory === "Сите" ? "Сите настани" : activeCategory}</h2>

        <input
          type="text"
          placeholder="Пребарај"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {Object.keys(groupedEvents).map((type) => (
        <div key={type} className="event-group">
          <div className="header-content">
            <h2>{activeCategory === "Сите" ? `${type}` : ""}</h2>
            {groupedEvents[type].length > 4 && (
              <p onClick={() => toggleShowAll(type)}>
                {showAll[type] ? "Сокриј ги" : "Види ги сите"}
              </p>
            )}
          </div>
          <div className="grouped-events">
            {groupedEvents[type]
              .slice(0, showAll[type] ? groupedEvents[type].length : 4)
              .map((event) => (
                <HoverCard key={event.id} item={event} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventsList;
