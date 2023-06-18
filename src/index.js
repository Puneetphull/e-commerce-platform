import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/app/scss/volt.scss";
// import { store } from "./store";
import { Provider } from "react-redux";
// import "rsuite/dist/rsuite.min.css";
import '../src/app/css e-commerce/css/style.css';
import '../src/app/css e-commerce/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
