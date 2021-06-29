import classes from "./Form.module.css";
import React from "react";
import iconLove from "../../assets/love.svg";

const FormSuccess = () => {
  return (
    <div className={classes["success-container"]}>
      <img src={iconLove} className={classes.loveIcon} alt="" />
      <div className={classes["success-message-title"]}>
        Your form is recorded
      </div>
      <div className={classes["success-message-text"]}>
        We will touch with you soon! ☕
      </div>
    </div>
  );
};

export default FormSuccess;
