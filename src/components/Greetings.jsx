import React from "react";

function Greetings() {
  const greetingColors = {
    morning: "#f59e0b",
    afternoon: "#10b981",
    night: "#6366f1",
  };

  let date = new Date();
  let currentTime = date.getHours();
  let greetings;
  let color;

  if (currentTime < 12) {
    greetings = "Good Morning ☀️";
    color = greetingColors.morning;
  } else if (currentTime < 18) {
    greetings = "Good Afternoon 🌤️";
    color = greetingColors.afternoon;
  } else {
    greetings = "Good Night 🌙";
    color = greetingColors.night;
  }

  return (
    <div className="section">
      <p className="section-title">Greeting</p>
      <h1 className="heading" style={{ color }}>
        {greetings}
      </h1>
    </div>
  );
}
export default Greetings;
