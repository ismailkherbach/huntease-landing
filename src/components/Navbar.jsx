import React from "react";

const Navbar = () => {
  return (
    <div className="flex fdr aic jcfs">
      <div className="navbar logo flex jcc">
        {" "}
        <img alt="logo" src={require("../assets/img/logo-white-retina.svg")} />
      </div>
      <div className="navbar-items flex fdr jcc ">
        <ul className="flex fdr aic">
          <li>Features</li>
          <li>Pricing</li>
          <li>Faq</li>
        </ul>
        <div className="button-demo flex aic jcc"> Request a Demo</div>
      </div>
    </div>
  );
};

export default Navbar;
