import React from "react";
import "../styles/Popup.css";
const Step1 = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          quod.
        </p>
      </div>
    </div>
  );
};

export default Step1;
