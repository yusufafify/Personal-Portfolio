import React from "react";

const Circle = ({ icon }) => {
  return (
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "#fff8eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={icon}
          alt="Logo"
          style={{ width: "80%", height: "80%", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

const CircleContainer = ({ icon }) => {
  return (
    <div>
      <Circle icon={icon} />
    </div>
  );
};

export default CircleContainer;
