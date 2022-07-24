import React from "react";
function Heading() {
  var msg;
  const customStyle = {
    color: ""
  };
  var time = new Date().getHours();

  if (time < 12) {
    msg = "Good Morning";
    customStyle.color = "red";
  } else if (time > 12 && time < 16) {
    msg = "Good Afternoon";
    customStyle.color = "Green";
  } else {
    msg = "Good Evening";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {msg}
    </h1>
  );
}
export default Heading;
