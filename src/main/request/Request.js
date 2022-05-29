import React from "react";
import Call from "../call/Call";
import RequestForm from "./RequestForm";

function Request() {
  return (
    <div className="request__container">
      <div className="request__text-block">
        <h2 className="request__title title">
          Request a free cleaning quote today
        </h2>
        <p className="request__text">
          In dignissim euismod pretium amet enim a eu nam ut urna accumsan
          pellentesque lacus duis pharetra eutortor.
        </p>
        <Call />
        <div className="separator_small"></div>
        <h3 className="request__subtitle">Not convinced yet?</h3>
        <p className="request__text">
          Massa bibendum consectetur maurisid gravida purus, dolor dui amet
          morbi non nunc urna purus diam.
        </p>
        <div className="request__button">
          <a href="index.html" className="button_white">
            Browse our packages
          </a>
        </div>
      </div>
      <RequestForm />
    </div>
  );
}

export default Request;
