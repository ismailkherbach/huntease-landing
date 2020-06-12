import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div>
      <Navbar tooglePopup={props.tooglePopup} />
      <div className="flex fdc aic jcc">
        <h2 className="white text_s55 fw300 extra_bold_text">
          Increase conversion rate with the
        </h2>
        <img
          className="sepa"
          alt="separator"
          src={require("../assets/img/separator.png")}
        />
        <h2 className="white text_s55 fw300 extra_bold_text">
          best cold-calling experience.
        </h2>
        <br></br>
        <h4 className="grey text_s23 fw200 semi_bold_text">
          Huntease is an all-in-one prospecting tool that offers a fluid,
          intuitive experience <br></br>designed to make cold-calling easy, fun
          and more productive.
        </h4>
        <br></br>
        <div
          className="button-demo flex fdr jcc aic semi_bold_text text_s18"
          onClick={props.tooglePopup}
        >
          Request a demo
          <img alt="arrow" src={require("../assets/img/arrow.png")} />
        </div>
        <img
          className="ilust_1"
          alt="ilust_1"
          src={require("../assets/illustrations/ilust_1.svg")}
        />
      </div>
    </div>
  );
};

export default Header;
