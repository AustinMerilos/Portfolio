import React from "react";
import ReactDOM from "react-dom/client";
import NavMenu from "./components/navMenu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavMenu />
  </React.StrictMode>
);
