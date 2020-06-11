import React from "react";

const BlocThree = (props) => {
  return (
    <div className="Bloc-three flex fdr aic jcc">
      <img alt="ilust_2" src={require("../assets/illustrations/ilust_3.svg")} />

      <div className="inner-Text flex fdc jcfs">
        <h2 className="text_s38 white bold_text">
          Automated emotion recognition <br></br>from natural conversations.
        </h2>
        <img alt="separator" src={require("../assets/img/separator.svg")} />
        <br></br>{" "}
        <h4 className="text_s18 semi_bold_text grey">
          Identify ambiguous speech patterns directly from the prospect's voice
          and<br></br> immediately recognize their emotions and{" "}
          <span className="white">intent.</span> Our deep-learning<br></br>{" "}
          algorithms provide predictive analysis on when's the ideal time to
          sell.
        </h4>
        <br></br>
        <div
          className="button-demo flex fdr jcc aic"
          onClick={props.tooglePopup}
        >
          I want to learn more
        </div>
      </div>
    </div>
  );
};

export default BlocThree;
