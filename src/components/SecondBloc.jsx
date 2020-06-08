import React from "react";
import SwitchBloc from "./small.components/switch_bloc";

const SecondBloc = () => {
  return (
    <div className="second-bloc flex fdc aic">
      <div className="switch-bloc flex fdr aic jcc">
        <SwitchBloc text={"Dashboard"} picture={"feat_1"} />
        <SwitchBloc text={"Smart guide"} picture={"feat_2"} />
        <SwitchBloc text={"Leads manager"} picture={"feat_3"} />
        <SwitchBloc text={"Appointments"} picture={"feat_4"} />
      </div>
      <div className="bloc-container flex fdr aic jcc">
        <img
          alt="ilust_2"
          src={require("../assets/illustrations/ilust_2.svg")}
        />
        <div className="blocs">
          <h3>
            Know your metrics and increase <br></br> your team's performance.
          </h3>
          <img alt="separator_2" src={require("../assets/img/separator.svg")} />

          <h5>Huntease's dashboard provides day-to-day insights on SDR</h5>
          <h5>performance metrics, and recaps daily acheivements.</h5>
          <br></br>
          <br></br>
          <h5>It stores data of each sales representative's performance and</h5>
          <h5>calculates their conversion rate so they can compare it with</h5>
          <h5>previous weeks and months.</h5>
          <div className="button-demo-two flex fdr jcc aic">
            <h5 className="Text-inner">Show me how it works</h5>
            <img alt="arrow" src={require(`../assets/img/arrow.svg`)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBloc;
