import React from "react";
import SearchIcon from "./icon/SearchIcon";
import { connect } from "react-redux";
import { SET_SEARCH_QUERY } from "../store/actions";

const Input = ({ searchQuery }) => {
  const onChangeInput = (text) => {
    SET_SEARCH_QUERY(text);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={searchQuery}
        style={{
          width: "646px",
          height: "48px",
          paddingLeft: "50px",
          fontSize: "16px",
          color: "#090A0A",
          fontWeight: "400",
          border: "1px solid rgba(32, 64, 128, 1)",
          borderRadius: "8px",
        }}
        className="addNewInput"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <div style={{ position: "absolute", top: 15, left: 15 }}>
        <SearchIcon />
      </div>
    </div>
  );
};

const S = (state) => ({
  searchQuery: state.search.searchQuery,
});

export default connect(S)(Input);
