import React from "react";

const FAQ = (props) => {
  return (
    <div className="FAQ flex fdc aic jcfs" id="faq_bloc">
      <h2 className="text_s38 bold_text blue">Frequently Asked Questions</h2>
      <div className="container test_s17 light_text grey">
        <div className="question-container flex fdr jcc aic ">
          <div className="question-bloc flex aic jcc ">
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
        <h2 className="text_s46 semi_bold_text white">
          Interested in growing your sales
        </h2>
        <img
          className="flex fdrr jcfe separator"
          alt="separator_2"
          src={require("../assets/img/separator.svg")}
        />
        <h2 className="text_s46 semi_bold_text white">team today?</h2>
        <div
          className="button-demo-two flex fdr jcc aic"
          onClick={props.tooglePopup}
        >
          <h5 className="Text-inner text_s18 regular_text blue">
            Boost my team
          </h5>
          <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
