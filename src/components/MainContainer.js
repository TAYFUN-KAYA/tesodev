const MainContainer = ({ children }) => {
  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default MainContainer;
