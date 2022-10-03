import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
//import store from "./store";
import DetailsPage from "./pages/DetailsPage";
import Homepage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";

const ROUTES = [
  {
    path: "details",
    component: () => <DetailsPage />,
  },
  {
    path: "addnew",
    component: () => <AddNewPage />,
  },
];

export const Switcher = ({ routes, props }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        {routes.map((route) => {
          const ElementComponent = route?.component;
          return <Route path={route?.path} element={<ElementComponent />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default ROUTES;
