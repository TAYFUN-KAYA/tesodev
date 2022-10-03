import React, { useState } from "react";
import MapIcon from "./icon/MapIcon";

const SearchDeatilContainerItem = ({ street, location, name, date }) => {
  const [style, setStyle] = useState({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "rgba(255, 255, 255, 1)",
    borderRadius: "8px",
  });

  return (
    <div
      style={style}
      onMouseEnter={() =>
        setStyle({ ...style, background: "rgba(79, 117, 194, 0.21)" })
      }
      onMouseLeave={() => setStyle({ ...style, background: "white" })}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div style={{ display: "flex" }}>
          <MapIcon />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <text
            style={{ color: "#090A0A", fontWeight: "400", fontSize: "16px" }}
          >
            {street}
          </text>
          <text
            style={{ color: "#72777A", fontWeight: "400", fontSize: "14px" }}
          >
            {location}
          </text>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "end",
          alignContent: "end",
          flex: 1,
          padding: "15px",
          gap: 6,
        }}
      >
        <text>{name}</text>
        <text>{date}</text>
      </div>
    </div>
  );
};

export default SearchDeatilContainerItem;
