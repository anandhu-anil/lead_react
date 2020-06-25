import React from "react";

const LearnMoreButton = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 15px",
        fontSize: "14px",
        cursor: "pointer",
        backgroundColor: "#fb515c",
        width: "130px",
        color: "white"
      }}
    >
      <div>Learn More</div>
    </div>
  );
};

export default LearnMoreButton;
