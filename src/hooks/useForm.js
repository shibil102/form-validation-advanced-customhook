import { useState, useEffect } from "react";

const useForm = (callback, validation) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "12",
  });

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputHandleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(validation(values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitted) {
      callback();
    }
  });

  return { inputHandleChange, values, handleSubmit, error };
};

export default useForm;
