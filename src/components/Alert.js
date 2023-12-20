import React from "react";

const Alert = ({type,message}) => {
  return (
    <div>
        {console.log("alert has been called")}
      <div class= {`alert alert-${type}`} role="alert">
        {message}
      </div>
    </div>
  );
};

export default Alert;
