import React from "react";
import DeleteIcon from "../../assets/delete.svg";
import "./Member.scss";

const Member = ({ background }) => {
  return (
    <div className="member" style={{ background: background }}>
      <div className="input_checkbox">
        <input
          type="checkbox"
          defaultChecked={true}
          onChange={() => console.log("ashish")}
        />
      </div>
      <span className="member__name width">Ashish</span>
      <span className="member__company width"> DC United</span>
      <span className="member__status width">Active</span>
      <span className="member__last_update width">21/02/2022</span>
      <span className="member__notes width">most matched played</span>
      <img className="member__icon" src={DeleteIcon} alt="deleteIcon" />
    </div>
  );
};

export default Member;
