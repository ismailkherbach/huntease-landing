import React from "react";

const BlocThree = (props) => {
  return (
    <div className="Bloc-three flex fdr aic jcc">
      <img alt="ilust_2" src={require("../assets/illustrations/ilust_3.svg")} />

      <div className="inner-Text flex fdc jcfs">
        <h2>
          Automated emotion recognition <br></br>from natural conversations.
        </h2>
        <img alt="separator" src={require("../assets/img/separator.svg")} />
        <h4>
          Identify ambiguous speech patterns directly from the prospect's voice
          and<br></br> immediately recognize their emotions and intent. Our
          deep-learning<br></br> algorithms provide predictive analysis on
          when's the ideal time to sell.
        </h4>
        <div
          className="button-demo flex fdr jcc aic"
          onClick={props.tooglePopup}
        >
          Get a free demo
          <img alt="arrow" src={require("../assets/img/arrow.png")} />
        </div>
      </div>
    </div>
  );
};

export default BlocThree;
