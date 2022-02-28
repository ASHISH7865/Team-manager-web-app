import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { sendData } from "../../app/teamSlice";
import { useDispatch } from "react-redux";
import { teamAction } from "../../app/teamSlice";
import Button from "../Button/Button";
import { statusOptions } from "../../Constant";
import "./Modal.scss";

const Modal = ({ show, close }) => {
  const [selectOption, setSelectOption] = useState("active");
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const notesRef = useRef(null);
  const dispatch = useDispatch();
  // function to send form data
  const submitData = async (e) => {
    e.preventDefault();
    let date = new Date();
    let day = `${date.getDate()}`.padStart(2, "0");
    let month = `${date.getMonth() + 1}`.padStart(2, "0");
    let year = date.getFullYear();
    const data = {
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      status: selectOption || "active",
      time: `${day}/${month}/${year}`,
      notes: notesRef.current.value || "",
    };

    await dispatch(sendData(data));
    dispatch(teamAction.changeDataEvent());
    close();
  };

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modalContainer">
          <div className="modal">
            <div className="form">
              <div className="form-group">
                <span>Name</span>
                <input className="form-field" type="text" ref={nameRef} />
              </div>
              <div className="form-group">
                <span>Company</span>
                <input className="form-field" type="text" ref={companyRef} />
              </div>

              <div className="form-group">
                <span>Notes</span>
                <input className="form-field" type="text" ref={notesRef} />
              </div>
              <div className="form-group">
                <span>Status</span>
                <select
                  className="modal__select"
                  name="sort"
                  value={selectOption}
                  onChange={(e) => setSelectOption(e.target.value)}
                >
                  {statusOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <footer className="modal_footer">
              <Button className="modal-close" onClick={() => close()}>
                Cancel
              </Button>
              <Button className="submit" onClick={submitData}>
                Submit
              </Button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
