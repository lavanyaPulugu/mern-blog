import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
          <p className="form_error-message">This is an error message.</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder=" Enter password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Enter confirm password"
            name="confirmpassword"
            value={userData.confirmpassword}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
