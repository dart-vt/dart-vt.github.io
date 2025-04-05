import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = createRoot(document.getElementById("root"));
root.render(
		<Home />
)
