import React, { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import Member from "../Member/Member";
import "./Dashboard.scss";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const Dashboard = () => {
  const loading = useSelector((state) => state.team.loading);
  const Data = useSelector((state) => state.team.data);

  const navigate = useNavigate();

  const data = [];
  const [show, setShow] = useState(false);

  for (const key in Data) {
    const newData = Object.assign({}, Data[key]);
    newData.id = key;
    data.push(newData);
  }

  const closePopup = () => {
    setShow(!show);
  };

  return (
    <>
      <Modal show={show} close={closePopup} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Button onClick={() => setShow(true)}>Add Members</Button>
      </div>
      <div className="member" style={{ marginTop: "100px" }}>
        <div className="input_checkbox">
          <input
            type="checkbox"
            defaultChecked={false}
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
        {loading === "fulfilled" && data
          ? data.map((item, index) => (
              <Member
                key={item.id}
                id={item.id}
                background={index % 2 === 0 ? "#d8e2dc" : "white"}
                item={item}
              />
            ))
          : "Loading....."}
      </div>
      <div className="logout">
        <Button
          onClick={() => {
            auth.signOut().then(() => navigate("/"));
          }}
        >
          logout
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
