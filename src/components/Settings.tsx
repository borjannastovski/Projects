import React from "react";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { UserType } from "@/types";

interface SettingsProps {
  open: boolean;
  handleClose: () => void;
  userData: UserType;
}

const Settings: React.FC<SettingsProps> = ({ open, handleClose, userData }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal">
        <div className="title">
          <h1>Поставки</h1>
          <p onClick={handleClose}>
            <FontAwesomeIcon icon={faX} />
          </p>
        </div>
        <div className="flex">
          <div className="left">
            <div className="box">
              <h5>Име</h5>
              <p>{userData.name}</p>
            </div>
            <div className="box">
              <h5>Е-маил</h5>
              <p>{userData.email}</p>
            </div>
            <div className="box">
              <h5>Лозинка</h5>
              <p>Промени Лозинка</p>
            </div>
            <div className="box select-box">
              <label>Професија</label>
              <select
                name="profession"
                id="profession"
                defaultValue={userData.positionWork}
              >
                <option value="regruter">HR регрутер</option>
                <option value="praktikant">Практикант</option>
                <option value="admin">HR админ</option>
                <option value="manager">Извршен менаџер</option>
                <option value="trainee">Management trainee</option>
              </select>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <h5>Презиме</h5>
              <p>{userData.surname}</p>
            </div>
            <div className="radio-div">
              <p>Добивај нотификации на:</p>
              <div>
                <input type="radio" value="platform" />
                <label>Платформа</label>
              </div>
              <div>
                <input type="radio" value="email" />
                <label>E-маил</label>
              </div>
              <div>
                <input type="radio" value="socialmediums" />
                <label>Социјални медиуми</label>
              </div>
            </div>

            <div className="radio-div">
              <p>Добивај нотификации за:</p>
              <div>
                <input type="radio" value="blog" />
                <label>Нови содржини</label>
              </div>
              <div>
                <input type="radio" value="event" />
                <label>Нови настани</label>
              </div>
              <div>
                <input type="radio" value="eventdate" />
                <label>Приближување на датум за настан</label>
              </div>
            </div>
          </div>
        </div>
        <button className="save">Зачувај</button>
      </div>
    </Modal>
  );
};

export default Settings;
