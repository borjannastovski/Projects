import { UserType } from "@/types";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  userData: UserType;
}

const iconMapping: Record<string, any> = {
  faComment: faComment,
  faCalendar: faCalendar,
};

const UserActivities = ({ userData }: Props) => {
  return (
    <section className="userActivities">
      <div className="leftside">
        <div className="points">
          <h3>Поени до следна рамка</h3>
          <div className="three-points">
            <img src="/blue.svg" alt="" />
            <img src="/red.svg" alt="" />
            <img src="/brown.svg" alt="" />
          </div>
        </div>
        <div className="badges">
          <div className="title">
            <h3>Најнови беџови</h3>
            <p>Види ги сите</p>
          </div>
          <div className="badges-list">
            {userData.badges.map((badge) => (
              <div className="badge-card" key={badge.id}>
                <div
                  className={`icon ${
                    badge.level === 2 ? "yellow-icon" : "red-icon"
                  }`}
                >
                  <FontAwesomeIcon icon={iconMapping[badge.icon]} />
                </div>
                <p>
                  <span>Левел {badge.level}</span> {badge.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="connections">
          <h3>Листа на конекции</h3>
          <div className="add-connection">
            <p>Додади конекција</p>
            <input type="text" placeholder="Пребарај" />
          </div>
          <div className="last-added">
            <div className="title">
              <h5>Последно додадени</h5>
              <p>Види ги сите</p>
            </div>
            <div className="connections-cards">
              {userData.connections.map((connection) => (
                <div className="card" key={connection.id}>
                  <div className="card-inner">
                    <img src={connection.img} alt={connection.name} />
                    <p>{connection.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rightside">
        <h1>Купени карти</h1>
        <div className="cards">
          {userData.cards.map((card) => (
            <div className="ticket" key={card.id}>
              <div className="title-event">
                <div className="image">
                  <div className="div">
                    <img className="first-pic" src={card.img} alt="" />
                    <div className="div-2">
                      <img src="/ticket.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>
                    <span>{card.for}:</span>
                  </h3>
                  <p>
                    <span>{card.date}</span> {card.place}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="discount-cards">
          <div className="discount">
            <p>Освоено:</p>
            <p className="big-number">20%</p>
            <p>попуст за следна карта</p>
          </div>
          <div className="discount">
            <p>Препорачано на:</p>
            <p className="big-number">20</p>
            <p>пријатели</p>
          </div>
        </div>
        <div className="feedback">
          <textarea
            placeholder="Остави фидбек за нешто што би можеле да подобриме на страната. Кажи ни што ти смета и ние ке се потрудиме да го подобриме."
            name="feedback"
          ></textarea>
          <div className="icon">
            <FontAwesomeIcon icon={faPaperclip} />
          </div>
          <button>Испрати</button>
        </div>
      </div>
    </section>
  );
};

export default UserActivities;
