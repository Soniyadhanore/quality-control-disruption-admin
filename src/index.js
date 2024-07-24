import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routings from "./Routes/Routings";
import { ConfigProvider } from "antd";
import "react-phone-number-input/style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#176B53",
        },
      }}
    >
      <Routings />
    </ConfigProvider>
  </React.StrictMode>
);