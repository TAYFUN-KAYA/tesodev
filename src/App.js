import React from "react";
//import { connect } from "react-redux";
import ROUTES, { Switcher } from "./routes";
import { NotifyMessageProvider } from "./context/NotifyMessageCtx";

const App = ({}) => {
  return (
    <NotifyMessageProvider>
      <Switcher routes={ROUTES} />
    </NotifyMessageProvider>
  );
};

export default App;
