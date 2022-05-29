import React from "react";
import freeQuote from "../../assets/img/free-quote/free-quote.svg";
import Call from "../call/Call";

function FreeQuote() {
  return (
    <div className="free-quote__container">
      <div className="free-quote__content">
        <h1 className="free-quote__title">Quality cleaning for your home</h1>
        <p className="free-quote__text">
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>
        <div className="free-quote__action">
          <div className="free-quote__button">
            <a href="index.html" className="button">
              Get a free quote
            </a>
          </div>
          <div className="free-quote__call">
            <Call />
          </div>
        </div>
      </div>
      <div className="free-quote__image">
        <img src={freeQuote} alt="free-quote" />
      </div>
    </div>
  );
}

export default FreeQuote;
