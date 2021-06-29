import React, { Fragment, useState } from "react";
import FormControls from "./FormControls";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <Fragment>
      {!isSubmitted ? (
        <FormControls submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </Fragment>
  );
};

export default Form;
