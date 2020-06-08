import React from "react";

const BlocPricing = () => {
  return (
    <div className="Bloc-five flex fdc aic jcc">
      <h2>Simple & transparent pricing</h2>
      <h4>
        Everything is about Freedom, and that is exactly what we are<br></br>{" "}
        giving you, try all the features for Free
      </h4>
      <div className="plans flex fdr jcc">
        {" "}
        <div className="notice flex fdc  jcc">
          <div className="flex jcfs fdr">
            <img
              alt="checked"
              src={require("../assets/img/awesome-info-circle.svg")}
            />
            <p>Additional information</p>
          </div>
          <h5>
            When you consume your free minutes<br></br>
            your plan switched to Pay-as-you-go <br></br>with €0.05 per minute.
          </h5>
        </div>
        <div className="plan-container plan-container-basic flex fdc aic jcfs">
          <div className="flex fdc">
            <h2>Basic</h2>
            <h4>
              Increase your sales revenue with an easy transition <br></br>to
              Huntease and a plan that best fits your workflow.
            </h4>
            <h1 className="flex jcfs aic">
              <span className="regular_text">€</span>29
              <span className="nano_text">.99</span>
            </h1>{" "}
            <h5>Per user/monthly</h5>
            <div className="plan-features flex fdc jcfs">
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>3 user minimum</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>240 Minutes of outgoing calls for free</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Personal dashboard</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Voice emotional analysis</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Conversional Guide (unlimited)</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Hubspot Integration</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Additional future Integrations</p>
              </div>
            </div>
          </div>
          <div className="button-demo flex fdr jcc aic">
            Get a free demo
            <img alt="arrow" src={require("../assets/img/arrow.svg")} />
          </div>
        </div>
        <div className="plan-container flex fdc aic jcfs">
          <div className="red_notice flex aic jcc">LAUNCHING PRICE</div>

          <div className="flex fdc">
            <h2>Growth</h2>
            <h4>
              Increase your sales revenue with an easy transition <br></br>to
              Huntease and a plan that best fits your workflow.
            </h4>
            <h1 className="flex jcfs aic">
              <span className="regular_text">€</span>39
              <span className="nano_text">.99</span>
            </h1>
            <h5>Per user/monthly</h5>
            <div className="plan-features flex fdc jcfs">
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>3 user minimum</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>240 Minutes of outgoing calls for free</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Personal dashboard</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Voice emotional analysis</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Conversional Guide (unlimited)</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Hubspot Integration</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p>Additional future Integrations</p>
              </div>
            </div>
          </div>
          <div className="button-demo flex fdr jcc aic">
            Get a free demo
            <img alt="arrow" src={require("../assets/img/arrow.svg")} />
          </div>
        </div>
        <div className="plan-container plan-container-basic partner flex fdc aic jcfs">
          <div className="flex fdc">
            <h2>Partner</h2>
            <h4>
              Increase your sales revenue with an easy transition <br></br>to
              Huntease and a plan that best fits your workflow.
            </h4>
          </div>
          <div className="button-demo flex fdr jcc aic">
            Contact us
            <img alt="arrow" src={require("../assets/img/arrow.svg")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocPricing;
