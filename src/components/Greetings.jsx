import React from "react";

function Greetings() {
  let headingStyle = {
    color: "",
  };
  let date = new Date();
  let currentTime = date.getHours();
  let greetings;

  if (currentTime < 12) {
    greetings = "Good Morning";
    headingStyle.color = "red";
  } else if (currentTime < 18) {
    greetings = "Good Afternoon";
    headingStyle.color = "green";
  } else {
    greetings = "Good Night";
    headingStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={headingStyle}>
        {greetings}
      </h1>
    </div>
  );
}
export default Greetings;
