import React from "react";

const FirstBlocFeature = ({ text, picture, description }) => {
  return (
    <div className="flex fdc aic jcc">
      <div className="feature">
        <img alt="box" src={require(`../../assets/img/${picture}.svg`)} />
        <h5>{text}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FirstBlocFeature;
