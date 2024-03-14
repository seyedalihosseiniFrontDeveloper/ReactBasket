import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CardProvider } from "./Context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
