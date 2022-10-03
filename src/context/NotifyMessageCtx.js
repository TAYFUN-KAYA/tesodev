import CloseIcon from "../components/icon/CloseIcon";

const { createContext, useState, useEffect } = require("react");

const NotifyMessageContext = createContext();

const NotifyMessageProvider = ({ children }) => {
  const [text, setDataText] = useState("");
  const [notifyType, setNotifyType] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
  }, []);

  const getElementValue = (textContent, typeError) => {
    setShow(true);
    setNotifyType(typeError);
    setDataText(textContent);
  };

  return (
    <NotifyMessageContext.Provider
      value={{
        text,
        setDataText,
        getElementValue,
      }}
    >
      <div
        style={{
          width: "375px",
          height: "123px",
          background: "#C4C4C4",
          position: "fixed",
          bottom: 20,
          right: 20,
          display: show ? "flex" : "none",
          flexDirection: "row",
          borderRadius: "8px",
          zIndex: 9,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <text
            style={{ fontWeight: "700", fontSize: "14px", color: "#090A0A" }}
          >
            {notifyType
              ? "Error while adding link element"
              : "Successing add new link element"}
          </text>
          <text
            style={{
              fontWeight: "400",
              fontSize: "13px",
              color: "#090A0A",
              lineHeight: "24px",
              paddingLeft: "20px",
              paddingRight: "10px",
            }}
          >
            {text}
          </text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              padding: "10px",
            }}
            onClick={() => {
              setShow(false);
            }}
          >
            <CloseIcon />
          </div>
          <button
            style={{
              width: "70px",
              height: "32px",
              borderRadius: "48px",
              background: notifyType ? "#FF4E78" : "#097969",
              border: "none",
              fontWeight: "500",
              fontSize: "16px",
              color: "white",
            }}
          >
            {notifyType ? "Error" : "Success"}
          </button>
        </div>
      </div>
      {children}
    </NotifyMessageContext.Provider>
  );
};

export { NotifyMessageContext, NotifyMessageProvider };
