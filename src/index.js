import React from "react";
import ReactDOM from "react-dom";
import Frame from "./components/frame";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<Frame />, document.getElementById("root"));
registerServiceWorker();
