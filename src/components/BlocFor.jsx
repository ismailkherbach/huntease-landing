import React from "react";

const BlocFor = () => {
  return (
    <div className="bloc-for-container flex fdc aic jcc">
      <h2>Integrations that fit into your workflow</h2>
      <img
        className="flex fdrr jcfe separator"
        alt="separator_2"
        src={require("../assets/img/separator.svg")}
      />

      <h4>
        You can transition your team into Huntease seamlessly with <br></br>
        the tools you're already using.
      </h4>
      <img alt="ilust_4" src={require("../assets/illustrations/ilust_6.svg")} />
    </div>
  );
};
export default BlocFor;
