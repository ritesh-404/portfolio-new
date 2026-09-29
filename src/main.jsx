import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// fonts
import "@fontsource/geist-mono";
import "@fontsource/hedvig-letters-serif";
import "@fontsource/instrument-sans";
import "@fontsource-variable/dm-sans";
import '@fontsource/solway';
import '@fontsource/geist-sans';
import '@fontsource/ibm-plex-serif';


// Import the base CSS (defaults to weight 400)
import "@fontsource/inter"; 

// Optional: Import specific weights or styles if needed
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
