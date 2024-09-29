import { useState } from "react";
import { EventType, SpeakerType } from "@/types";
import SpeakerCard from "./SpeakerCard";

interface Props {
  data: EventType;
}

const SpeakersList = ({ data }: Props) => {
  const [showAll, setShowAll] = useState(false);

  if (!data.eventSpeakersList || data.eventSpeakersList.length === 0) {
    return null;
  }

  const displayedSpeakers = showAll
    ? data.eventSpeakersList
    : data.eventSpeakersList.slice(0, 4);

  return (
    <section className="speakers-list">
      <h1>Специјални гости</h1>
      <p className="desc">
        Ова се луѓе од кои дефинитивно има што да се научи. Нивните достигнувања
        се огромни и со нивна помош секторот на HR успеа да достигне нови
        височини. Не пропуштајте ја оваа прилика да ка слушнете, а и да научите
        нешто од нивната мудрост.
      </p>
      <div className="speakers-container">
        {displayedSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      {!showAll && data.eventSpeakersList.length > 4 && (
        <button onClick={() => setShowAll(true)}>Сите спикери</button>
      )}
    </section>
  );
};

export default SpeakersList;
