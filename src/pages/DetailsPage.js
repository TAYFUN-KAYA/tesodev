import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AddNewButton from "../components/AddNewButton";
import testImage from "../components/image/tesodev.png";
import Input from "../components/Input";
import SearchDeatilContainerItem from "../components/SearchDeatilContainerItem";
import ReactPaginate from "react-paginate";
import Dropdown from "react-dropdown";
import order from "../components/image/order.png";
import SearchDetailButton from "../components/SearchDetailButton";
import { connect } from "react-redux";

const Otherpage = ({ searchQuery, data, itemsPerPage = 5 }) => {
  const location = useLocation();
  const { filteredData } = location.state.filteredData;
  const [filtered, setfiltered] = useState(filteredData);
  const options = [
    "Name ascending",
    "Name descending",
    "Year ascending",
    "Year descending",
  ];
  const [dropDownValue, setDropDownValue] = useState(null);
  const sortFunction = (type) => {
    let sort;
    switch (type) {
      case "Name ascending":
        sort = filtered?.sort((nameOne, nameTwo) =>
          nameOne[0].localeCompare(nameTwo[0])
        );
        setfiltered([...sort]);
        return sort;
      case "Name descending":
        sort = filtered
          ?.sort((nameOne, nameTwo) => nameOne[0].localeCompare(nameTwo[0]))
          .reverse();
        setfiltered([...sort]);
        return sort;
      case "Year ascending":
        sort = filtered
          ?.sort((dateOne, dateTwo) => {
            dateOne = dateOne[3].split("/");
            dateTwo = dateTwo[3].split("/");
            return (
              dateOne[2] - dateTwo[2] ||
              dateOne[1] - dateTwo[1] ||
              dateOne[0] - dateTwo[0]
            );
          })
          .reverse();
        setfiltered([...sort]);
        return sort;
      case "Year descending":
        sort = filtered?.sort((dateOne, dateTwo) => {
          dateOne = dateOne[3].split("/");
          dateTwo = dateTwo[3].split("/");
          return (
            dateOne[2] - dateTwo[2] ||
            dateOne[1] - dateTwo[1] ||
            dateOne[0] - dateTwo[0]
          );
        });
        setfiltered([...sort]);
        return sort;
      default:
        return filtered;
    }
  };

  function Items({ currentItems }) {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item) => (
            <>
              <SearchDeatilContainerItem
                street={item[1]}
                location={item[4] + "," + item[5]}
                date={item[3]}
                name={item[0]}
              />
              <div
                style={{
                  width: "726px",
                  background: "rgba(126, 126, 126, 1)",
                  height: "1px",
                }}
              ></div>
            </>
          ))}
      </div>
    );
  }

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filtered?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filtered?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filtered]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filtered?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "40px" }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 32,
            }}
          >
            <Link to={"/"}>
              <img src={testImage} style={{ width: "149px", height: "63px" }} />
            </Link>
            <Input />
            <SearchDetailButton
              searchQuery={searchQuery}
              data={data}
              setFiltered={setfiltered}
              color={"#4F75C2"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                justifyContent: "end",
              }}
            >
              <AddNewButton />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "75px",
          }}
        >
          <div style={{ width: "900px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "726px", padding: "30px" }}>
                <Items currentItems={currentItems} />
              </div>
              <div style={{ position: "relative" }}>
                <Dropdown
                  options={options}
                  onChange={(e) => {
                    setDropDownValue(e.value);
                    sortFunction(e.value);
                  }}
                  value={dropDownValue}
                  placeholder="Order By"
                  className="my-custom-class"
                  placeholderClassName="my-custom-class-place"
                  menuClassName="my-custom-class-menu"
                />
                <div style={{ position: "absolute", top: 0, left: 5 }}>
                  <img src={order} style={{ width: "24px", height: "24px" }} />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ReactPaginate
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={0}
              marginPagesDisplayed={3}
              pageCount={pageCount}
              previousLabel="Previous"
              pageClassName="page-item-general"
              pageLinkClassName="page-link"
              previousClassName="prev-item"
              previousLinkClassName="page-link"
              nextClassName="next-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="break-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const S = (state) => ({
  searchQuery: state.search.searchQuery,
  data: state.data,
});

export default connect(S)(Otherpage);
