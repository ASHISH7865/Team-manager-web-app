import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../app/teamSlice";
import DeleteIcon from "../../assets/delete.svg";
import "./Member.scss";
import { teamAction } from "../../app/teamSlice";

const Member = ({ background, item, id }) => {
  const dispatch = useDispatch();
  const deleteMemberData = async (id) => {
    await dispatch(deleteData(id));
    dispatch(teamAction.changeDataEvent());
  };
  return (
    <div className="member" style={{ background: background }}>
      <div className="input_checkbox">
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => console.log("ashish")}
        />
      </div>
      <span className="member__name width">{item.name}</span>
      <span className="member__company width">{item.company}</span>
      <span className="member__status width">{item.status}</span>
      <span className="member__last_update width">{item.time}</span>
      <span className="member__notes extra-width">{item.notes}</span>
      <img
        className="member__icon"
        src={DeleteIcon}
        alt="deleteIcon"
        onClick={() => deleteMemberData(id)}
      />
    </div>
  );
};

export default Member;
