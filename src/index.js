import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Tailwind CSS is imported here
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the app with BrowserRouter and Redux Provider */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
