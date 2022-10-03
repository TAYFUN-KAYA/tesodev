

const Search = (searchQuery, data) => {
  const find = data?.filter((o) => {
    const searchData = o
      .map((o) => {
        return o;
      })
      .join(", ");
    return searchData?.match(new RegExp(searchQuery, "gi"));
  });
  return find
};

export default Search;
