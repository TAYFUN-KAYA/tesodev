import React from "react";
import testImage from "./image/tesodev.png";

const TestOdevImage = ({ textUse }) => {
  return (
    <div style={{ position: "relative" }}>
      <img src={testImage} style={{ width: "278px", height: "115px" }} />
      {textUse && (
        <text
          style={{
            color: "#484848",
            fontWeight: "700",
            fontSize: "14px",
            position: "absolute",
            bottom: -25,
            right: -35,
          }}
        >
          Search app
        </text>
      )}
    </div>
  );
};

export default TestOdevImage;
