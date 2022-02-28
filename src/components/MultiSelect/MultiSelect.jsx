import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { teamAction } from "../../app/teamSlice";

import Checkbox from "../Checkbox/Checkbox";

import "./multiselect.scss";

const MultiSelectAll = (props) => {
  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState(false);
  const [Checked, setChecked] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  useEffect(() => {
    dispatch(teamAction.filter({ Checked, Data: props.Data }));
    setSelectedCount(Checked.length);
  }, [Checked]);

  const c = [];
  if (props.Data) {
    for (var item of props.Data) {
      if (c.indexOf(item.company) === -1) {
        c.push(item.company);
      }
    }
  }
  localStorage.setItem("company", JSON.stringify(c));

  const handleFilters = (filters) => {};
  return (
    <div className="multiselect-checkbox">
      <div className="select" onClick={() => setShowOption(!showOption)}>
        {selectedCount !== 0
          ? `${selectedCount} company selected`
          : "select company"}
      </div>
      {showOption && (
        <div className="options">
          {JSON.parse(localStorage.getItem("company")).map((item, index) => (
            <Checkbox
              key={index}
              item={{ name: item, _id: index }}
              handleFilters={(filters) => handleFilters(filters)}
              onChange={() => handleToggle(item)}
              checked={Checked.indexOf(item) === -1 ? false : true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectAll;
