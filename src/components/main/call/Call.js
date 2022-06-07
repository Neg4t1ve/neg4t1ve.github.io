import React from "react";
import phone from "../../../assets/img/icon/phone-icon.svg";

const Call = (props) => {
  return (
    <div className="call">
      <div className="call__icon">
        <img src={phone} alt="phone-icon" />
      </div>
      <div className="call__body">
        <h4
          className={
            props.modifier
              ? "call__title call__title" + props.modifier
              : "call__title"
          }
        >
          Call us now
        </h4>
        <a
          href="tel:4145672109"
          className={
            props.modifier
              ? "call__phone call__phone" + props.modifier
              : "call__phone"
          }
        >
          (414) 567 - 2109
        </a>
      </div>
    </div>
  );
};

export default Call;
