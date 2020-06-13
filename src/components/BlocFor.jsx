import React from "react";

const BlocFor = () => {
  return (
    <div className="bloc-for-container flex fdc aic jcfs">
      <h3 className="extra_bold_text  blue">
        Integrations that fit into your <strong>workflow</strong>
      </h3>

      <h4 className="semi_bold_text grey">
        You can transition your team into Huntease seamlessly with <br></br>
        the tools you're already using.
      </h4>
      <img alt="ilust_4" src={require("../assets/illustrations/ilust_6.svg")} />
    </div>
  );
};
export default BlocFor;
