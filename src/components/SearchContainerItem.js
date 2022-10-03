import React from "react";
import MapIcon from "./icon/MapIcon";

const SearchContainerItem = ({ date, loaction }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
      }}
    >
      <MapIcon />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <text style={{ color: "#090A0A", fontWeight: "400", fontSize: "16px" }}>
          {date}
        </text>
        <text style={{ color: "#72777A", fontWeight: "400", fontSize: "14px" }}>
          {loaction}
        </text>
      </div>
    </div>
  );
};

export default SearchContainerItem;
