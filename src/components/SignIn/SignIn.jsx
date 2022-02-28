import React, { useRef } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../config";
import Button from "../Button/Button";

const SignIn = () => {
  const user = useSelector((state) => state.user.user);

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSignIn = async (event) => {
    let response = null;
    try {
      response = await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      );
    } catch (error) {
      if (error.code === "auth/user-not-found") alert("User not registered");
      if (error.code === "auth/wrong-password") alert("Invalid Password");
      console.log(error.code);
    }
  };

  return user ? (
    <Navigate to="/dashboard" />
  ) : (
    <>
      <div className="text">
        <div className="signup__text">Login to Continue</div>
      </div>
      <div className="form">
        <div className="form-group">
          <span>Email Id</span>
          <input className="form-field" type="text" ref={emailRef} />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input className="form-field" type="password" ref={passRef} />
        </div>
        <span>
          Not Registered <Link to="/register">click here</Link>
        </span>

        <Button className="button" onClick={handleSignIn}>
          Login
        </Button>
      </div>
    </>
  );
};

export default SignIn;
