import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../auth/helper";

const Email = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        console.log("DATA", data);
        if (data.email === email) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>&nbsp; &nbsp;&nbsp; &nbsp;
              <input
                className="signup--btn"
                id="em"
                value={name}
                onChange={handleChange("name")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <input 
                className="signup--btn"
                id="em"
                value={email}
                onChange={handleChange("email")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">password</label>&nbsp;
              <input
                className="signup--btn"
                id="em"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button
              onClick={onSubmit}
              className="auth--sub"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="auth">
      <h1>Sign In</h1>
      <p>Already a member? <Link to="/signin">Log in</Link></p>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
         {/* <p className="text-white text-center">
          {JSON.stringify(values)}
        </p> */}
        <p>Or Sign up with <Link to="/signup">socials</Link></p>
    </div>
  );
};

export default Email;
        