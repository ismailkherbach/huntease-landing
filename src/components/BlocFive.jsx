import React from "react";

const BlocFive = () => {
  return (
    <div className="bloc-5 flex fdc aifs jcc">
      <div className="bloc-5-container flex fdr aifs jcc">
        <div className="blocs-5 flex aifs jcc fdc">
          <h3 className="extra_bold_text blue">
            <strong>Competitive</strong> environment
          </h3>

          <h3 className=" extra_bold_text blue">for your sales team.</h3>
          <h4 className=" semi_bold_text grey">
            Huntease is a platform centered around{" "}
            <span className="blue">gamification</span> and teamwork which
            creates a healthy competitive environment for SDR teams to boost
            their productivity and acquire more clients while having fun.
          </h4>
        </div>
        <img
          alt="ilust_2"
          src={require("../assets/illustrations/ilust_5.svg")}
        />
      </div>
    </div>
  );
};

export default BlocFive;
