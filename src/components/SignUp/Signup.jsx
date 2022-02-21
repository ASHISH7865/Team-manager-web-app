import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const naviagte = useNavigate();
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
      .then((authUser) => naviagte("/dashboard"))
      .catch((err) => alert(err.code));
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

        <button className="button" onClick={handleRegister}>
          {" "}
          Register
        </button>
      </div>
    </>
  );
};

export default SignUp;
