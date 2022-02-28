import React from "react";

const Checkbox = ({ item, onChange, checked }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <label htmlFor={item._id}>{item.name}</label>
    </div>
  );
};

export default Checkbox;
