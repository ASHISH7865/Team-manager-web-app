import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import Member from "../Member/Member";
import "./Dashboard.scss";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Sorting from "../SortingContainer/Sorting";

import MultiSelectAll from "../MultiSelect/MultiSelect";

const Dashboard = () => {
  const loading = useSelector((state) => state.team.loading);
  const Data = useSelector((state) => state.team.data);
  const filterData = useSelector((state) => state.team.filterData);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const company = [];
  localStorage.setItem("company", JSON.stringify(company));

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
      <Sorting />
      <MultiSelectAll Data={Data} />
      <div className="member" style={{ marginTop: "80px" }}>
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
        {loading === "fulfilled"
          ? filterData.length !== 0
            ? filterData.map((item, index) => (
                <Member
                  key={index}
                  id={item.id}
                  background={index % 2 === 0 ? "#d8e2dc" : "white"}
                  item={item}
                />
              ))
            : Data
            ? Data.map((item, index) => (
                <Member
                  key={index}
                  id={item.id}
                  background={index % 2 === 0 ? "#d8e2dc" : "white"}
                  item={item}
                />
              ))
            : "No Data"
          : "Data Loading"}
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
