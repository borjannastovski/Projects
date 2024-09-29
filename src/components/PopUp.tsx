import { EventType } from "@/types";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/material";
import React from "react";

interface PopUpProps {
  open: boolean;
  handleClose: () => void;
  nextEvent: EventType | null;
  number: number | null;
}

const PopUp: React.FC<PopUpProps> = ({
  open,
  handleClose,
  nextEvent,
  number,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="popup-modal">
        <div className="box">
          <div className="left">
            <img className="pic" src={nextEvent?.img} alt="" />
            <img className="ticket" src="/ticket-calendar.svg" alt="" />
          </div>
          <div className="right">
            <p className="days">
              {number !== null && number > 0
                ? `Уште само ${number} дена до:`
                : "Денеска"}
            </p>
            <h1>
              {nextEvent?.type} : {nextEvent?.title}
            </h1>
            <p className="date-place">
              {nextEvent?.dateDay} {nextEvent?.dateMonth} {nextEvent?.dateYear}{" "}
              - {nextEvent?.place}
            </p>
          </div>
        </div>
        <p className="icon" onClick={handleClose}>
          <FontAwesomeIcon icon={faX} />
        </p>
      </div>
    </Modal>
  );
};

export default PopUp;
