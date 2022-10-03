import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MainContainer from "../components/MainContainer";
import AddNewButton from "../components/AddNewButton";
import TestOdevImage from "../components/TestOdevImage";
import SearchButton from "../components/SearchButton";
import Input from "../components/Input";
import SearchContainerItem from "../components/SearchContainerItem";
import Search from "../hooks/Search";

const Homepage = ({ data, cols, searchQuery }) => {
  const [showSearch, setShowSearch] = useState(false);
  const filteredData = Search(searchQuery, data);
  useEffect(() => {
    if (searchQuery === "") {
      setShowSearch(false);
    }
  }, [searchQuery]);
  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <AddNewButton color={"#204080"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingTop: "73px",
            justifyContent: "center",
          }}
        >
          <TestOdevImage textUse={true} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "837px",
            marginTop: "45px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "40px",
            }}
          >
            <text
              style={{
                color: "#090A0A",
                fontWeight: "700",
                fontSize: "32px",
              }}
            >
              Find in records
            </text>
            <div style={{ display: "flex", paddingTop: "20px", gap: 16 }}>
              <Input />
              <SearchButton setShowSearch={setShowSearch} color={"#204080"} />
            </div>
          </div>
          <div style={{ width: "780px", height: "248px", marginTop: "17px" }}>
            {showSearch && searchQuery !== "" && filteredData?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #484848",
                  padding: "40px",
                  borderRadius: "24px",
                  gap: 32,
                  paddingBottom: "15px",
                }}
              >
                {filteredData?.slice(0, 3).map((o, i) => {
                  return (
                    <SearchContainerItem
                      date={o[3]}
                      loaction={o[4] + "," + o[5]}
                    />
                  );
                })}
                {filteredData.length > 3 && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link
                      style={{
                        color: "#090A0A",
                        fontSize: "16px",
                        fontWeight: "700",
                        textDecoration: "none",
                      }}
                      to="/details"
                      state={{ filteredData: { filteredData } }}
                    >
                      Show more...
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const S = (state) => ({
  cols: state.cols,
  data: state.data,
  searchQuery: state.search.searchQuery,
});

export default connect(S)(Homepage);
