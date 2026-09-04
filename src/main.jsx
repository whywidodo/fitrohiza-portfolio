import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

const redirect = sessionStorage.redirect;
if (redirect) {
  delete sessionStorage.redirect;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  window.history.replaceState(null, "", base + redirect);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);