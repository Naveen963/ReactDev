import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import "../index.css";
import { MainPageLayout } from "./components/MainPageLayout";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainPageLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
