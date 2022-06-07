import React from "react";
import clients from "../../../assets/img/video-block/clients.svg";
import done from "../../../assets/img/video-block/done.svg";
import employe from "../../../assets/img/video-block/employe.svg";
import Video from "./Video";

function VideoBlock() {
  return (
    <div className="video-block__container">
      <div className="video-block__header">
        <h2 className="video-block__title title">
          Our cleaning services have no comparison
        </h2>
        <p className="video-block__text">
          Lobortis mattis odio leo eget mauris met aliquet semper molestie
          sollicitudin congue massa mauris lectus vitae cras viverra gravida
          sapien.
        </p>
      </div>
      <ul className="vide-block__stats stats-list">
        <li className="stats-list__column">
          <img src={clients} alt="clients-icon" className="stats-list__icon" />
          <div className="stats-list__text">
            <h4 className="stats-list__title">clients</h4>
            <p className="stats-list__count">3,480+</p>
          </div>
        </li>
        <li className="stats-list__column">
          <img src={done} alt="done-icon" className="stats-list__icon" />
          <div className="stats-list__text">
            <h4 className="stats-list__title">jobs done</h4>
            <p className="stats-list__count">12,540+</p>
          </div>
        </li>
        <li className="stats-list__column">
          <img src={employe} alt="employe-icon" className="stats-list__icon" />
          <div className="stats-list__text">
            <h4 className="stats-list__title">Employees</h4>
            <p className="stats-list__count">100+</p>
          </div>
        </li>
      </ul>
      <Video />
      <div className="separator"></div>
    </div>
  );
}

export default VideoBlock;
