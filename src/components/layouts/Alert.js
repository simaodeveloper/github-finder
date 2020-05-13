import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <span className="fa fa-info-circle"></span> {alert.msg}
      </div>
    )
  );
};

export default Alert;
