import React, { useState } from "react";
import axios from "axios";
const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [name, SetName] = useState("");
  const [success, SetSuccess] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const send_mail = async () => {
    const response = await axios.post(
      "https://huntease-mvp.herokuapp.com/request-demo",
      {
        mail: email,
        phone: phone,
        name: name,
      }
    );
    if ((response.status = 200)) {
      SetSuccess(true);
      console.log("Success !");
    }
    console.log(email, name, phone);
  };
  return (
    <div className="popup-container flex fdr aic jcc">
      <div className="popup flex fdc aic jcc">
        <div className="top_left" />
        <div className="cancel flex aic jcc" onClick={props.tooglePopup}>
          X
        </div>{" "}
        <img
          className="logo"
          alt="logo"
          src={require("../../assets/img/logo-white-retina.svg")}
        />
        <div className="popup-inner-container flex fdc aic jcc">
          <h3>
            Interested in growing your sales team today? Send us a request 👇
          </h3>
          <p>We'll contact you as soon as we receive your request.</p>
          <div className="flex fdc aifs">
            <label>First name</label>
            <input
              placeholder="Joe Doe"
              onChange={(e) => SetName(e.target.value)}
            />
            <label>Work email</label>
            <input
              placeholder="johndoe@company.com"
              onChange={(e) => SetEmail(e.target.value)}
            />
            <label>Phone number</label>
            <input
              placeholder="+1   555 - 555 - 5555 "
              onChange={(e) => SetPhone(e.target.value)}
            />
          </div>
          <div className="button-demo flex fdr jcc aic" onClick={send_mail}>
            Get a free demo
            <img alt="arrow" src={require("../../assets/img/arrow.png")} />
          </div>
          <p>
            We care about protecting your data. Here’s our{" "}
            <b>Privacy Policy.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
