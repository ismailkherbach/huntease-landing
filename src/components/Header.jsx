import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <div className="flex fdc aic jcc">
        <h2>Increase conversion rate with the best </h2>
        <img alt="separator" src={require("../assets/img/separator.png")} />
        <h2>cold-calling experience.</h2>
        <h4>
          Huntease is an all-in-one sales workspace that employs AI for sales
          growth.
        </h4>
        <div className="button-demo flex fdr jcc aic">
          Get a free demo
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
