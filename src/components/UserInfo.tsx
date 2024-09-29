import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
import { faGear, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Settings from "@/components/Settings";
import { UserType } from "@/types";

interface Props {
  data: UserType;
}

const UserInfo = ({ data }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="user-info">
      <div className="left-side">
        <div className="avatar-name">
          <img src="/images/valentina.jpg" alt="Avatar" />
          <h2>{data.name}</h2>
          <p>{data.placeLiving}</p>
        </div>
        <div className="position-cv">
          <p>
            <FontAwesomeIcon icon={faUser} /> {data.positionWork}
          </p>
          <p>
            <FontAwesomeIcon icon={faPaperclip} />{" "}
            <span className="underline">CV</span>
          </p>
        </div>
        <div className="contact">
          <p>
            <FontAwesomeIcon icon={faUser} /> {data.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> {data.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faGear} />{" "}
            <span className="underline" onClick={handleOpen}>
              Поставки
            </span>
          </p>
        </div>
        <div className="comment-icon">
          <FontAwesomeIcon icon={faComments} />
          <p className="notificationDot"></p>
        </div>
      </div>
      <div className="right-side">
        <h2>Кратка биографија</h2>
        <p className="bio-desc">{data.biography}</p>
        <h2 className="suggestion-title">Препораки</h2>
        {data.recommendations.map((rec) => (
          <div className="suggestion" key={rec.id}>
            <div className="suggestion-header">
              <img src={rec.img} alt={rec.name} />
              <div>
                <h5>{rec.name}</h5>
                <p>Пред {rec.time} минути</p>
              </div>
            </div>
            <p>{rec.text}</p>
          </div>
        ))}
      </div>

      <Settings open={open} handleClose={handleClose} userData={data} />
    </section>
  );
};

export default UserInfo;
