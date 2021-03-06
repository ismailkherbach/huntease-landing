import React, { useState } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";

//import { UncontrolledCollapse } from "reactstrap";
const FAQ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="FAQ flex fdc aic jcfs" id="faq_bloc">
      <h3 className=" extra_bold_text blue">Frequently Asked Questions</h3>
      <div className="faq-container grey">
        <div className="questions flex fdr jcc aic ">
          <div className="question-bloc flex fdc aic jcc ">
            <div className="faq-toggle flex fdc aic jcfs" id="toggler-1">
              {" "}
              <h4 className=" text_s17 extra_bold_text text_s17">
                1. Do I need to give credit card information to use the free
                version?
              </h4>
              <UncontrolledCollapse toggler="toggler-1">
                <div className="faq-toggled">
                  No. Huntease's 14-days free trial offers 25min for free and
                  doesn't require credit card information.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
          <div className="question-bloc fdc flex aic jcc">
            <div className="faq-toggle flex fdc aic jcfs" id="toggler-2">
              <h4 className=" text_s17 extra_bold_text text_s17">
                2. Is it possible to integrate Huntease with my favorite CRM?
              </h4>
              <UncontrolledCollapse toggler="toggler-2">
                <div className="faq-toggled">
                  Absolutely, currently we offer integrations with Hubspot and
                  PipeDrive only but many more integrations are coming soon.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>{" "}
        </div>

        {/* <UncontrolledCollapse toggler="toggler">
          <h3>Hello</h3>
  </UncontrolledCollapse>*/}
        <div className="questions flex aic jcc">
          <div className="question-bloc fdc flex aic jcc">
            <div className="faq-toggle fdc flex aic jcl" id="toggler-3">
              <h4 className="text_s17 extra_bold_text text_s17">
                3. Does Huntease offer integrated VoIP?
              </h4>
              <UncontrolledCollapse toggler="toggler-3">
                <div className="faq-toggled">
                  Yes, Huntease is an outbound calling software with integrated
                  VoIP that allows our users to have a phone number and make
                  sales calls directly from our application.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
          <div className="question-bloc fdc flex aic jcc">
            <div className="faq-toggle flex fdc aic jcfs" id="toggler-4">
              <h4 className=" text_s17 extra_bold_text text_s17">
                4. What sets Huntease apart from other Cloud calling services?
              </h4>
              <UncontrolledCollapse toggler="toggler-4">
                <div className="faq-toggled">
                  Unlike other services, Huntease is designed to increase the
                  efficiency of sales representatives and help them increase
                  performance and productivity.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
        </div>
        <div className="questions flex aic jcc">
          <div className="question-bloc fdc flex aic jcc">
            <div className="faq-toggle flex fdc aic jcfs" id="toggler-5">
              <h4 className=" text_s17 extra_bold_text text_s17">
                5. My prospects speak different languages, is this a problem?
              </h4>
              <UncontrolledCollapse toggler="toggler-5">
                <div className="faq-toggled">
                  Not at all. Our software has been validated with existing
                  emotion databases and works on voice pitch, tone, no matter
                  what language.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_bloc flex fdc aic jcc">
        <h3 className="semi_bold_text white">
          Interested in <strong>growing</strong> your sales
        </h3>

        <h3 className="text_s46 semi_bold_text white">team today?</h3>
        <div
          className="button-demo-two flex fdr jcc aic"
          onClick={props.tooglePopup}
        >
          <h5 className="Text-inner semi_bold_text blue">Boost my team</h5>
          <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
