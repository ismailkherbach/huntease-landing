import React, { useState } from "react";
import SwitchBloc from "./small.components/switch_bloc";

const text_1 = (
  <div className="blocs">
    <h3>
      Know your metrics and increase <br></br> your team's performance.
    </h3>
    <img alt="separator_2" src={require("../assets/img/separator.svg")} />

    <h5>
      Huntease's dashboard provides day-to-day insights on SDR<br></br>
      performance metrics, and recaps daily acheivements.
    </h5>
    <br></br>
    <br></br>
    <h5>
      It stores data of each sales representative's performance and
      <br></br>calculates their conversion rate so they can compare it with
      <br></br>previous weeks and months.
    </h5>
    <div className="button-demo-two flex fdr jcc aic">
      <h5 className="Text-inner">Show me how it works</h5>
      <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
    </div>
  </div>
);
const text_2 = (
  <div className="blocs">
    <h3>
      Close the deal<br></br>With team schedules.
    </h3>
    <img alt="separator_2" src={require("../assets/img/separator.svg")} />
    <h5>
      The average SDR usually has to use a CRM, phone<br></br>system, script
      documents and calendars from several<br></br>providers to close one
      deal...
    </h5>
    <br></br>
    <br></br>
    <h5>
      Huntease allows SDRs to complete their booking<br></br>process within our
      platform to save time and pave the <br></br>way for the next deal.
    </h5>
    <div className="button-demo-two flex fdr jcc aic">
      <h5 className="Text-inner">Show me how it works</h5>
      <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
    </div>
  </div>
);
const text_3 = (
  <div className="blocs">
    <h3>
      Converting qualified prospects
      <br></br>into customers with smart guide.
    </h3>
    <img alt="separator_2" src={require("../assets/img/separator.svg")} />

    <h5>
      With Huntease's smart conversational guide, you can create a<br></br>step
      by step script that let's you focus on one thing at a time,<br></br>and
      let's you check it off your list.
    </h5>
    <br></br>
    <br></br>
    <h5>
      A checklist script method is proven to make SDRs more<br></br>productive
      and help them qualify leads more accurately.
    </h5>
    <div className="button-demo-two flex fdr jcc aic">
      <h5 className="Text-inner">Show me how it works</h5>
      <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
    </div>
  </div>
);
const text_4 = (
  <div className="blocs">
    <h3>
      Access your future customers with
      <br></br>one click.
    </h3>
    <img alt="separator_2" src={require("../assets/img/separator.svg")} />

    <h5>
      We know how tedious and overwhelming CRMs can get, <br></br>therefore we
      made sure that Huntease can provide quick <br></br>access to your list of
      leads within the app with no hassle.
    </h5>
    <br></br>
    <br></br>
    <h5>
      We also made it possible to import leads from several CRMs <br></br>(like
      Hubspot, Salesforce...etc) into Huntease so that you can <br></br>sell
      with a few clicks.
    </h5>
    <div className="button-demo-two flex fdr jcc aic">
      <h5 className="Text-inner">Show me how it works</h5>
      <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
    </div>
  </div>
);
const SecondBloc = (props) => {
  const [activatedBloc, setActivatedBloc] = useState(text_1);

  return (
    <div className="second-bloc flex fdc aic">
      <div className="switch-bloc flex fdr aic jcc">
        <div onClick={() => setActivatedBloc(text_1)}>
          {" "}
          <SwitchBloc
            text={"Dashboard"}
            picture={
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
              >
                <g id="pie-chart-2">
                  <rect
                    id="Rectangle_986"
                    data-name="Rectangle 986"
                    width="42"
                    height="42"
                    fill={activatedBloc == "text_1" ? "#0026bc" : "#8c96cf"}
                    opacity="0"
                  />
                  <path
                    id="Tracé_234"
                    data-name="Tracé 234"
                    d="M15.105,16.4H26.639a1.435,1.435,0,0,0,1.435-1.435A12.969,12.969,0,0,0,15.105,2,1.435,1.435,0,0,0,13.67,3.435V14.969A1.435,1.435,0,0,0,15.105,16.4ZM16.54,4.991a10.081,10.081,0,0,1,8.542,8.542H16.54Z"
                    transform="translate(9.968 1.458)"
                    fill={activatedBloc == text_1 ? "#0026bc" : "#8c96cf"}
                  />
                  <path
                    id="Tracé_235"
                    data-name="Tracé 235"
                    d="M34.952,19.3H20.859a1.574,1.574,0,0,1-1.574-1.574V3.595A1.591,1.591,0,0,0,17.522,2,17.292,17.292,0,1,0,36.543,21.025,1.591,1.591,0,0,0,34.952,19.3Z"
                    transform="translate(1.499 1.454)"
                    fill={activatedBloc == text_1 ? "#0026bc" : "#8c96cf"}
                  />
                </g>
              </svg>
            }
          />
        </div>
        <div onClick={() => setActivatedBloc(text_2)}>
          <SwitchBloc
            text={"Smart guide"}
            picture={
              <svg
                id="book-open"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
              >
                <rect
                  id="Rectangle_985"
                  data-name="Rectangle 985"
                  width="44"
                  height="44"
                  transform="translate(44 44) rotate(180)"
                  fill={activatedBloc == text_2 ? "#0026bc" : "#8c96cf"}
                  opacity="0"
                />
                <path
                  id="Tracé_232"
                  data-name="Tracé 232"
                  d="M27.667,4.564a2.273,2.273,0,0,0-1.98-.422L13,7.406V33.568l13.86-3.557a2.292,2.292,0,0,0,1.723-2.237V6.361a2.292,2.292,0,0,0-.917-1.8Z"
                  transform="translate(10.833 3.392)"
                  fill={activatedBloc == text_2 ? "#0026bc" : "#8c96cf"}
                />
                <path
                  id="Tracé_233"
                  data-name="Tracé 233"
                  d="M18.067,7.4,5.343,4.137A2.328,2.328,0,0,0,3.4,4.559a2.292,2.292,0,0,0-.88,1.833V27.769a2.292,2.292,0,0,0,1.723,2.218l13.823,3.575Z"
                  transform="translate(2.1 3.398)"
                  fill={activatedBloc == text_2 ? "#0026bc" : "#8c96cf"}
                />
              </svg>
            }
          />
        </div>
        <div onClick={() => setActivatedBloc(text_3)}>
          <SwitchBloc
            text={"Leads manager"}
            picture={
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
              >
                <g id="people">
                  <rect
                    id="Rectangle_987"
                    data-name="Rectangle 987"
                    width="43"
                    height="43"
                    fill={activatedBloc == text_3 ? "#0026bc" : "#8c96cf"}
                    opacity="0"
                  />
                  <path
                    id="Tracé_236"
                    data-name="Tracé 236"
                    d="M12.209,17.418A7.209,7.209,0,1,0,5,10.209,7.209,7.209,0,0,0,12.209,17.418Z"
                    transform="translate(4.011 2.407)"
                    fill={activatedBloc == text_3 ? "#0026bc" : "#8c96cf"}
                  />
                  <path
                    id="Tracé_237"
                    data-name="Tracé 237"
                    d="M19.407,17.814A5.407,5.407,0,1,0,14,12.407,5.407,5.407,0,0,0,19.407,17.814Z"
                    transform="translate(11.232 5.616)"
                    fill={activatedBloc == text_3 ? "#0026bc" : "#8c96cf"}
                  />
                  <path
                    id="Tracé_238"
                    data-name="Tracé 238"
                    d="M36.243,25.608a1.8,1.8,0,0,0,1.8-1.8,9.011,9.011,0,0,0-14.526-7.119A12.616,12.616,0,0,0,2,25.608a1.8,1.8,0,0,0,1.8,1.8H25.429a1.8,1.8,0,0,0,1.8-1.8"
                    transform="translate(1.605 10.437)"
                    fill={activatedBloc == text_3 ? "#0026bc" : "#8c96cf"}
                  />
                </g>
              </svg>
            }
          />
        </div>

        <div onClick={() => setActivatedBloc(text_4)}>
          <SwitchBloc
            text={"Appointments"}
            picture={
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
              >
                <g id="people">
                  <rect
                    id="Rectangle_987"
                    data-name="Rectangle 987"
                    width="43"
                    height="43"
                    fill={activatedBloc == text_4 ? "#0026bc" : "#8c96cf"}
                    opacity="0"
                  />
                  <path
                    id="Tracé_236"
                    data-name="Tracé 236"
                    d="M12.209,17.418A7.209,7.209,0,1,0,5,10.209,7.209,7.209,0,0,0,12.209,17.418Z"
                    transform="translate(4.011 2.407)"
                    fill={activatedBloc == text_4 ? "#0026bc" : "#8c96cf"}
                  />
                  <path
                    id="Tracé_237"
                    data-name="Tracé 237"
                    d="M19.407,17.814A5.407,5.407,0,1,0,14,12.407,5.407,5.407,0,0,0,19.407,17.814Z"
                    transform="translate(11.232 5.616)"
                    fill={activatedBloc == text_4 ? "#0026bc" : "#8c96cf"}
                  />
                  <path
                    id="Tracé_238"
                    data-name="Tracé 238"
                    d="M36.243,25.608a1.8,1.8,0,0,0,1.8-1.8,9.011,9.011,0,0,0-14.526-7.119A12.616,12.616,0,0,0,2,25.608a1.8,1.8,0,0,0,1.8,1.8H25.429a1.8,1.8,0,0,0,1.8-1.8"
                    transform="translate(1.605 10.437)"
                    fill={activatedBloc == text_4 ? "#0026bc" : "#8c96cf"}
                  />
                </g>
              </svg>
            }
          />
        </div>
      </div>
      <div className="bloc-container flex fdr aic jcc">
        <img
          alt="ilust_2"
          src={require("../assets/illustrations/ilust_2.svg")}
        />
        {activatedBloc}
      </div>
    </div>
  );
};

export default SecondBloc;
