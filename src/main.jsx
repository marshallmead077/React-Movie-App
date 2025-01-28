import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/React-Movie-App"> {/* Adjust this to match your repo name */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
