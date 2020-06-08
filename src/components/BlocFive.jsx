import React from "react";

const BlocFive = () => {
  return (
    <div className="second-bloc flex fdc aic">
      <div className="bloc-container flex fdr aic jcc">
        <div className="blocs">
          <h3>Competitive</h3>{" "}
          <img alt="separator_2" src={require("../assets/img/separator.svg")} />
          <h3> environment for your sales team.</h3>
          <h5>
            Huntease is a platform centered around gamification and teamwork
            <br></br>
            which creates a healthy competitive environment for SDR teams to
            <br></br>
            boost their productivity and acquire more clients while having fun.
          </h5>
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
