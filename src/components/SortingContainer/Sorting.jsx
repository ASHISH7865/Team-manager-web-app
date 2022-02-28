import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { teamAction } from "../../app/teamSlice";

const Sorting = (props) => {
  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState(false);
  const [isActive, setIsActive] = useState("None");
  const handleSort = (param) => {
    if (param === "Active") {
      dispatch(teamAction.sortByActive());
    } else {
      dispatch(teamAction.sortByClosed());
    }
    setIsActive(param);
  };
  return (
    <div className="multiselect-checkbox" style={{ left: "15px" }}>
      <div className="select" onClick={() => setShowOption(!showOption)}>
        Sort by {isActive}
      </div>
      {showOption && (
        <div className="options">
          <div onClick={() => handleSort("Active")}>Active</div>
          <div onClick={() => handleSort("Closed")}>Closed</div>
        </div>
      )}
    </div>
  );
};

export default Sorting;
