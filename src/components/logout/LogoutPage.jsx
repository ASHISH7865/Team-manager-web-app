import React from "react";
import Button from "../Button/Button";

const LogoutPage = () => {
  return (
    <div className="logout">
      <span>you are logged out</span>
      <Button className={"extra-width"}> Return to login page</Button>
    </div>
  );
};

export default LogoutPage;
