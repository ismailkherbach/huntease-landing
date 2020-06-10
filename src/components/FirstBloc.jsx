import React from "react";
import FirstBlocFeature from "./small.components/first_bloc_feature";

const FirstBloc = () => {
  return (
    <div className="first-bloc-container flex fdc jcc aic">
      {" "}
      <h5 className="flex aic jcc bold_text orange text_s24">
        "On a traditional CRM, it takes an average of 6 clicks to make a call."
      </h5>
      <div className="first-bloc-inner  flex fdc aic jcc">
        {" "}
        <div className="inner-text-bloc flex fdc aifs jcfs">
          {" "}
          <h2 className="blue bold_text text_s55">All you need</h2>
          <img alt="separator_2" src={require("../assets/img/separator.svg")} />
          <h2 className="blue bold_text text_s55">
            for your cold-calling campaigns.
          </h2>
          <h4 className="grey text_24 semi_bold_text">
            Huntease is a sales-calling software that employs AI to help sales
            <br></br>
            teams grow and be more productive. With an interface that's<br></br>
            specifically designed for your SDR teams, they are able to makes
            <br></br>
            more calls, minimizing the amount of times they click away from
            <br></br>
            their screen to look for additional information or access their
            calendar to book meetings.
          </h4>
        </div>
        <div className="container flex aic jcc">
          <div className="flex features fdr aic jcc">
            {" "}
            <FirstBlocFeature
              text={"All-in-one"}
              description={
                "Huntease integrates all essential tasks sales teams need to complete, without disrupting workflow."
              }
              picture={"Box"}
            />
            <FirstBlocFeature
              text={"Less clicks"}
              description={
                "Huntease minimizes the amount of clicks it takes to perform a sales call. Making it time-effecient and pleasant to use."
              }
              picture={"Stroke-1"}
            />
            <FirstBlocFeature
              text={"Intelligent algorithms"}
              description={
                "With AI and Deep-learning, Huntease helps sales representatives close deals faster and more efficiently ."
              }
              picture={"Chart-dots"}
            />
            <FirstBlocFeature
              text={"Climb to the top"}
              description={
                "Huntease creates a healthy competitive environment for sales teams to compete, earn points and earn rewards."
              }
              picture={"Crown"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBloc;
