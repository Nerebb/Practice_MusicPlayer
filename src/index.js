import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <MusicPlayerProvider>
        <App />
      </MusicPlayerProvider>
  </React.StrictMode>
);
