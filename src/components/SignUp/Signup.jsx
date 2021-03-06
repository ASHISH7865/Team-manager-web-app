import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then(() => navigate("/dashboard"))
      .catch((error) => {
        if (error.code === "auth/weak-password")
          alert("Password should minimum 6 character long");
        if (error.code === "auth/email-already-in-use")
          alert("User already exist.Please login");
        if (error.code === "auth/invalid-email") alert("invalid email");
      });
  };
  return (
    <>
      <div className="text">
        <div>Great Tool For Managing Teams</div>
        <div className="signup__text">if you are new here</div>
        <div>Please register to enjoy benefits</div>
      </div>
      <div className="form">
        <div className="form-group">
          <span>Name</span>
          <input className="form-field" type="text" ref={nameRef} />
        </div>
        <div className="form-group">
          <span>Email Id</span>
          <input className="form-field" type="text" ref={emailRef} />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input className="form-field" type="password" ref={passRef} />
        </div>
        <span>
          Already Registered <Link to="/">click here</Link>
        </span>

        <Button className="button" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </>
  );
};

export default SignUp;
