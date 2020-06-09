import React, { useState } from "react";

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="popup-container flex fdr aic jcc">
      <div className="popup flex fdc aic jcc">
        <div className="cancel flex aic jcc">X</div>{" "}
        <img
          alt="logo"
          src={require("../../assets/img/logo-white-retina.svg")}
        />
        <h3>
          Interested in growing your sales team today? Send us a request 👇
        </h3>
        <p>We'll contact you as soon as we receive your request.</p>
        <div className="flex fdc aifs">
          <label>First name</label>
          <input placeholder="Joe Doe" />
          <label>First name</label>
          <input placeholder="Joe Doe" />
          <label>First name</label>
          <input placeholder="Joe Doe" />
        </div>
        <div className="button-demo flex fdr jcc aic">
          Get a free demo
          <img alt="arrow" src={require("../../assets/img/arrow.png")} />
        </div>
        <p>
          We care about protecting your data. Here’s our <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
};

export default Popup;
