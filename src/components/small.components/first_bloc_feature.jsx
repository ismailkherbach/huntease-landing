import React from "react";

const FirstBlocFeature = ({ text, picture, description }) => {
  return (
    <div className="flex fdc aic jcc">
      <div className="feature">
        <img alt="box" src={require(`../../assets/img/${picture}.svg`)} />
        <h5 className="blue text_s25 extra_bold_text">{text}</h5>
        <p className="grey text_s16 semi_bold_text">{description}</p>
      </div>
    </div>
  );
};

export default FirstBlocFeature;
