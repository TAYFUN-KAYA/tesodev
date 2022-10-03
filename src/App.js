import React from "react";
//import { connect } from "react-redux";
import ROUTES, { Switcher } from "./routes";

const App = ({}) => {
  return <Switcher routes={ROUTES} />;
};

export default App;
