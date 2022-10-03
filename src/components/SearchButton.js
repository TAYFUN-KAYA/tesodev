import React from "react";

const SearchButton = ({ setShowSearch, color }) => {
  return (
    <div
      style={{ justifyContent: "end", alignItems: "end", alignContent: "end" }}
    >
      <button
        style={{
          width: "138px",
          height: "46px",
          background: color,
          borderRadius: "12px",
          border: "none",
        }}
        id="searchButton"
        onClick={() => {
          setShowSearch(true);
        }}
      >
        <text style={{ fontWeight: "700", fontSize: "18px", color: "#ffff" }}>
          Search
        </text>
      </button>
    </div>
  );
};

export default SearchButton;
