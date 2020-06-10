import React from "react";

const Footer = () => {
  return (
    <div className="footer flex aic jcc fdc">
      <img alt="logo" src={require("../assets/img/logo-dark.svg")} />
      <div className="items flex fdr jcc aic">
        <ul className="flex fdr aic jcc regular_text test_s18 dark">
          <li
            onClick={() => {
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
              let offsetTop = document.getElementById("faq_bloc").offsetTop;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }}
          >
            {" "}
            Faq
          </li>
        </ul>
      </div>
      <p className="grey text_s18 regular_text">
        All rights reserved © Huntease 2020
      </p>
    </div>
  );
};

export default Footer;
