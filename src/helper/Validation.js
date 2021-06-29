export default function validation(values) {
  const userNameRegEx = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required";
  } else if (!userNameRegEx.test(values.username)) {
    errors.username = "Username is invalid";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegEx.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegEx.test(values.password)) {
    errors.password = "Must be 8 character 1 letter 1 number";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password didn't match";
  }
  return errors;
}
