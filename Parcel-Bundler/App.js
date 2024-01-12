import React from "react";
import ReactDOM from "react-dom/client";

const grandParent = React.createElement("div", { id: "grandParent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", {}, "Child 1"),
    React.createElement("h2", {}, "Child 2"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", {}, "Child 1"),
    React.createElement("h2", {}, "Child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(grandParent);
