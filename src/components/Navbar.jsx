import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex fdr aic">
      <div className="logo flex jcfs">
        {" "}
        <img alt="logo" src={require("../assets/img/logo-white-retina.png")} />
      </div>
      <div className="items flex fdr ">
        <ul className="flex fdr aic">
          <li>Features</li>
          <li>Pricing</li>
          <li>Faq</li>
          <li>Request a Demo</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
