import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// fonts
import "@fontsource/geist-mono";
import "@fontsource/hedvig-letters-serif";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-sans";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
