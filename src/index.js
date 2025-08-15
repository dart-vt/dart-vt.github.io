/*import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";

const root = createRoot(document.getElementById("root"));
root.render(
		<Home />
)*/
import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home"; // adjust the path if your Home.js is in a different folder

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

