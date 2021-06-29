import React from "react";
import classes from "./Form.module.css";
import useForm from "../../hooks/useForm";
import validation from "../../helper/Validation";

const FormControls = ({ submitForm }) => {
  const { inputHandleChange, values, handleSubmit, error } = useForm(
    submitForm,
    validation
  );
  return (
    <div className={classes["form-content"]}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.title}>Please Signup for new features!</div>
        <div className={classes["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={values.userName}
            onChange={inputHandleChange}
          />
          {error.username && (
            <small className={classes["error-text"]}>{error.username}</small>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={inputHandleChange}
          />
          {error.email && (
            <small className={classes["error-text"]}>{error.email}</small>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={inputHandleChange}
          />
          {error.password && (
            <small className={classes["error-text"]}>{error.password}</small>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Enter password again"
            value={values.password2}
            onChange={inputHandleChange}
          />
          {error.password2 && (
            <small className={classes["error-text"]}>{error.password2}</small>
          )}
        </div>
        <button type="submit" className={classes["form-input-btn"]}>
          Signup
        </button>
        <p className={classes.login}>
          Already have an account? <span> login</span>
        </p>
      </form>
    </div>
  );
};

export default FormControls;
