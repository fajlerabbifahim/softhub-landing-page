import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import HomeLayout from "./Layouts/HomeLayout/HomeLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeLayout />
  </StrictMode>
);
