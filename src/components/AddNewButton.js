import React from "react";
import { Link } from "react-router-dom";

const AddNewButton = () => {
  return (
    <div
      style={{ justifyContent: "end", alignItems: "end", alignContent: "end" }}
    >
      <button
        style={{
          width: "198px",
          height: "46px",
          background: "#204080",
          borderRadius: "12px",
          border: "none",
        }}
        id="addNewButton"
      >
        <Link
          style={{ fontWeight: "700", fontSize: "18px", color: "#ffff",textDecoration:"none" }}
          to={"/addnew"}
        >
          Add new record
        </Link>
      </button>
    </div>
  );
};

export default AddNewButton;
