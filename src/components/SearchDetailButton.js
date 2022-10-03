import React from "react";
import Search from "../hooks/Search";

const SearchDetailButton = ({ searchQuery, data, setFiltered, color }) => {
  const handleSearch = () => {
    const filteredData = Search(searchQuery, data);
    setFiltered(filteredData);
  };
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
        id="detailsButton"
        onClick={() => handleSearch()}
      >
        <text style={{ fontWeight: "700", fontSize: "18px", color: "#ffff" }}>
          Search
        </text>
      </button>
    </div>
  );
};

export default SearchDetailButton;
