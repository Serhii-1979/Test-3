import React from "react";
import ReactDOM from "react-dom/client";
import WrappedAppMath from "./AppMath";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WrappedAppMath />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import AppMath from "./AppMath";
// import "./styles.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppMath />
//   </React.StrictMode>
// );