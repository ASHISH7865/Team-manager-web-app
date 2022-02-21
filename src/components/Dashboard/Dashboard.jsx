import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import Member from "../Member/Member";
import "./Dashboard.scss";
const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  if (!user) {
    navigate("/");
  }
  return (
    <>
      <div className="member" style={{ marginTop: "100px" }}>
        <div className="input_checkbox">
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={() => console.log("ashish")}
          />
        </div>
        <span className="member__name width white">Name</span>
        <span className="member__company width white">Company</span>
        <span className="member__status width white">Status</span>
        <span className="member__last_update width white">Last Updated</span>
        <span className="member__notes width white">Notes</span>
        <div className="member__icon" />
      </div>
      <div className="scrollable_area">
        {["a", "b", "c"].map((item, index) => (
          <Member background={index % 2 === 0 ? "#d8e2dc" : "white"} />
        ))}
      </div>
      <div className="logout">
        {user && user.email}
        <button onClick={() => auth.signOut()}>logout</button>
      </div>
    </>
  );
};

export default Dashboard;
