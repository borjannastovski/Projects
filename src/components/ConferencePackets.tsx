import { EventType } from "@/types";
import React from "react";

interface Props {
  data: EventType;
}

const ConferencePackets = ({ data }: Props) => {
  return (
    <>
      <section className="forDots">
        <section className="conference-packets">
          <h1>Пакети за поединци и корпорации</h1>
          <div className="packets">
            {data.conferencePackets?.map((packet) => (
              <div key={packet.id} className="packet">
                <h2>{packet.for}</h2>
                <p className="price">{packet.price}</p>
                <ul className="benefits-packet">
                  {packet.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <button>Купи карта</button>
              </div>
            ))}
          </div>
          <button className="btn-friend">Предложи на пријател</button>
        </section>
        <img className="packet-dots-1" src="/images/dots-14.png" alt="" />
        <img className="packet-dots-2" src="/images/dots-15.png" alt="" />
        <img className="packet-dots-3" src="/images/dots-16.png" alt="" />
      </section>
    </>
  );
};

export default ConferencePackets;
