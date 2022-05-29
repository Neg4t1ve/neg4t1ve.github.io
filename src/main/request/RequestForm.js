import React from "react";

function RequestForm() {
  return (
    <form action="#" method="post" enctype="text/plain" className="form">
      <div className="form__top-block">
        <div className="field">
          <div className="field__title">Full name</div>
          <input type="text" name="Full name" id="" value="" />
        </div>
        <div className="field">
          <div className="field__title">Phone number</div>
          <input type="tel" name="Phone number" id="" value="" />
        </div>
        <div className="field">
          <div className="field__title">Adress</div>
          <input type="text" name="Adress" id="" value="" />
        </div>
        <div className="field">
          <div className="field__title">Email</div>
          <input type="email" name="Email" id="" value="" />
        </div>
        <div className="field">
          <div className="field__title">Requsted service</div>
          <input type="text" name="Requested service" id="" value="" />
        </div>
        <div className="field">
          <div className="field__title">Day of service</div>
          <input type="text" name="Day of service" id="" value="" />
        </div>
      </div>
      <div className="form__bottom-block">
        <div className="field field_big">
          <div className="field__title">Add a note</div>
          <textarea name="Add a note" id=""></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="form__button button"
        name="Submit message"
      >
        Submit message
      </button>
    </form>
  );
}

export default RequestForm;
