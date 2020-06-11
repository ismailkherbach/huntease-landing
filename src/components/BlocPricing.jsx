import React, { useState } from "react";
import Switch from "react-switch";

const BlocPricing = (props) => {
  const [checked, SetChecked] = useState(false);
  const [shown, SetShown] = useState(false);
  return (
    <div className="Bloc-five flex fdc aic jcc" id="pricing_bloc">
      <h2 className="bold_text text_s45 blue">Simple & transparent pricing</h2>
      <h4 className="text_s21 regular_text grey">
        Everything is about Freedom, and that is exactly what we are<br></br>{" "}
        giving you, try all the features for Free
      </h4>
      <div className="toggle-container flex fdr aic jcc">
        <h3 className={`text_s27 regular_text ${checked ? "grey" : "blue"}`}>
          Monthly
        </h3>
        <Switch
          offColor="white"
          onColor="white"
          offHandleColor="#0026BC"
          onHandleColor="#0026BC"
          uncheckedIcon={false}
          checkedIcon={false}
          className="toggle"
          onChange={() => SetChecked(!checked)}
          checked={checked}
        />
        <h3 className={`text_s27 regular_text ${checked ? "blue" : "grey"}`}>
          Yearly
        </h3>
        <img
          className="green-notice"
          alt="checked"
          src={require("../assets/img/green-notice.svg")}
        />
      </div>
      <div className="plans flex fdr jcc">
        {" "}
        {shown && (
          <div
            className="notice flex fdc  jcc"
            onMouseLeave={() => SetShown(false)}
          >
            <div className="flex jcfs fdr">
              <img
                alt="checked"
                src={require("../assets/img/awesome-info-circle.svg")}
              />
              <p className="text_s14 bold_text orange">
                Additional information
              </p>
            </div>
            <h5 className="text_s14 bold_text grey">
              When you consume your free minutes<br></br>
              your plan switched to<b> Pay-as-you-go</b> <br></br>with €0.05 per{" "}
              <b>minute.</b>
            </h5>
          </div>
        )}
        <div className="plan-container plan-container-basic flex fdc aic jcfs">
          <div className="flex fdc">
            <h2 className="text_s38 bold_text blue">Basic</h2>
            <h4 className="text_s14 regular_text grey">
              Increase your sales revenue with an easy transition <br></br>to
              Huntease and a plan that best fits your workflow.
            </h4>
            <h1 className="flex jcfs aic text_s90 blue bold_text">
              <span className="text_s60">€</span>29
              <span className="text_s20">.99</span>
            </h1>{" "}
            <h5 className="text_s16 regular_text grey">Per user/monthly</h5>
            <div className="plan-features flex fdc jcfs">
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">3 user minimum</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  240 Minutes of outgoing calls for free
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">Personal dashboard</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Voice emotional analysis
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Conversional Guide (unlimited)
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Hubspot Integration
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Additional future Integrations
                </p>
              </div>
            </div>
          </div>
          <div
            className="button-demo flex fdr jcc aic  text_s18 bold_text white"
            onClick={props.tooglePopup}
          >
            Get a free demo
            <img alt="arrow" src={require("../assets/img/arrow.svg")} />
          </div>
        </div>
        <div className="plan-container flex fdc aic jcfs">
          <div className="red_notice flex aic jcc">LAUNCHING PRICE</div>

          <div className="flex fdc">
            <h2 className="text_s38 bold_text blue">Growth</h2>
            <h4 className="text_s14 regular_text grey">
              Increase your sales revenue with an easy transition <br></br>to
              Huntease and a plan that best fits your workflow.
            </h4>
            <h1 className="flex jcfs aic text_s90 blue bold_text">
              <span className="text_s60">€</span>39
              <span className="text_s20">.99</span>
            </h1>{" "}
            <h5 className="text_s16 regular_text grey">Per user/monthly</h5>
            <div className="plan-features flex fdc jcfs">
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">3 user minimum</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  240 Minutes of outgoing calls for free{" . "}
                  <span onMouseEnter={() => SetShown(true)}>
                    {" "}
                    <img
                      alt="checked"
                      src={require("../assets/img/awesome-info-circle.svg")}
                    />
                  </span>
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">Personal dashboard</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Voice emotional analysis
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Conversional Guide (unlimited)
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Hubspot Integration
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="text_s16 regular_text dark">
                  Additional future Integrations
                </p>
              </div>
            </div>
          </div>
          <div
            className="button-demo flex fdr jcc aic text_s18 bold_text white"
            onClick={props.tooglePopup}
          >
            Get a free demo
            <img alt="arrow" src={require("../assets/img/arrow.svg")} />
          </div>
        </div>
        <div className="plan-container plan-container-basic partner flex fdc aic jcfs">
          <div className="flex fdc">
            <h2 className="text_s38 bold_text blue">Partner</h2>
            <h4 className="text_s14 regular_text grey">
              Increase your sales revenue with an easy transition <br></br>to
              Huntease and a plan that best fits your workflow.
            </h4>
          </div>
          <div
            className="button-demo flex fdr jcc aic  text_s18 bold_text white"
            onClick={props.tooglePopup}
          >
            Contact us
            <img alt="arrow" src={require("../assets/img/arrow.svg")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocPricing;
