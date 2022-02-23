import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { sendData } from "../../app/teamSlice";
import { useDispatch } from "react-redux";
import { teamAction } from "../../app/teamSlice";
import Button from "../Button/Button";
import "./Modal.scss";

const Modal = ({ show, close }) => {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const statusRef = useRef(null);
  const notesRef = useRef(null);
  const dispatch = useDispatch();

  // function to send form data
  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      status: statusRef.current.value || "",
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
                <span>status</span>
                <input className="form-field" type="text" ref={statusRef} />
              </div>
              <div className="form-group">
                <span>notes</span>
                <input className="form-field" type="text" ref={notesRef} />
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
