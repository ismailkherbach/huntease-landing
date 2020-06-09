import React from "react";

const FAQ = (props) => {
  return (
    <div className="FAQ flex fdc aic jcfs">
      <h2>Frequently Asked Questions</h2>
      <div className="container">
        <div className="question-container flex fdr jcc aic">
          <div className="question-bloc flex aic jcc">
            <h4>
              1. Do I need to give credit card information to use the free
              version?
            </h4>
          </div>
          <div className="question-bloc flex aic jcc">
            <h4>
              2. Is it possible to integrate Huntease with my favorite CRM?
            </h4>
          </div>
        </div>
        <div className="question-container flex aic jcc">
          <div className="question-bloc flex aic jcc">
            <h4>3. Does Huntease offer integrated VoIP?</h4>
          </div>
          <div className="question-bloc flex aic jcc">
            <h4>
              4. What sets Huntease apart from other Cloud calling services?
            </h4>
          </div>
        </div>
        <div className="question-container flex aic jcc">
          <div className="question-bloc flex aic jcc">
            <h4>
              5. My prospects speak different languages, is this a problem?
            </h4>
          </div>
        </div>
      </div>
      <div className="bottom_bloc flex fdc aic jcc">
        <h2>Interested in growing your sales</h2>
        <img
          className="flex fdrr jcfe separator"
          alt="separator_2"
          src={require("../assets/img/separator.svg")}
        />
        <h2> team today?</h2>
        <div
          className="button-demo-two flex fdr jcc aic"
          onClick={props.tooglePopup}
        >
          <h5 className="Text-inner">Get a free demo</h5>
          <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
