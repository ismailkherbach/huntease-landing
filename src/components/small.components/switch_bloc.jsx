import React from "react";

const SwitchBloc = ({ text, picture }) => {
  return (
    <div className="switch-feature-button flex fdr jcfs aic">
      <div className="circle-inner red flex aic jcc">{picture}</div>
      <h5 className="Text blue text_s18 light_text">{text}</h5>
    </div>
  );
};

export default SwitchBloc;
