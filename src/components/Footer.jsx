import React from "react";

const Footer = () => {
  return (
    <div className="footer flex aic jcc fdc">
      <img alt="logo" src={require("../assets/img/logo-dark.svg")} />
      <div className="items flex fdr jcc aic">
        <ul className="flex fdr aic jcc">
          <li>Features</li>
          <li>Pricing</li>
          <li>Faq</li>
        </ul>
      </div>
      <p>All rights reserved © Huntease 2020</p>
    </div>
  );
};

export default Footer;
