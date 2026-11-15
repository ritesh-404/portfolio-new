import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/geist-sans";
import "@fontsource/dynalight/400.css";
// import "@fontsource-variable/dm-sans";
// import "@fontsource/geist-mono";
// import "@fontsource-variable/nata-sans/wght.css";
// import "@fontsource-variable/pixelify-sans/wght.css";
// import "@fontsource/niconne/400.css";
// import "@fontsource/new-rocker/400.css";
// import "@fontsource/special-elite/400.css";
// import "@fontsource/nova-cut/400.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
