import React, { useState } from "react";
//import { Collapse, NavbarToggler } from "reactstrap";
//import { UncontrolledCollapse } from "reactstrap";
const NavbarPopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const close = props.close;
  const demo = props.tooglePopup;
  return (
    <div className="popup-container flex fdr">
      <div className="popup fdc aic flex jcc">
        <div className="cancel flex aic jcc" onClick={props.close}>
          <img
            className="close"
            alt="close"
            src={require("../../assets/img/close-icon.svg")}
          />
        </div>{" "}
        <ul className="flex fdc aifs white semi_bold_text">
          <li
            onClick={() => {
              close();
              let offsetTop = document.getElementById("features_bloc")
                .offsetTop;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              close();

              let offsetTop = document.getElementById("pricing_bloc").offsetTop;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Pricing
          </li>
          <li
            onClick={() => {
              close();

              let offsetTop = document.getElementById("faq_bloc").offsetTop;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Faq
          </li>
        </ul>
        <div
          className="button-demo flex aic jcc"
          onClick={() => {
            close();
            demo();
          }}
          id="toggler1"
        >
          {" "}
          Request a Demo
        </div>
      </div>
    </div>
  );
};

export default NavbarPopup;
