import React from "react";

const SwitchBloc = ({ text, picture }) => {
  return (
    <div className="switch-feature-button flex fdr jcfs aic">
      <div className="circle-inner flex aic jcc">
        <img alt={picture} src={require(`../../assets/img/${picture}.svg`)} />
      </div>
      <h5 className="Text">{text}</h5>
    </div>
  );
};

export default SwitchBloc;
