/*
    <div id="GrandParent">
    <div id="parent">
    <h1>Child 1</h1>
     <h1>Child 2</h1>
     </div>
     <div id="parent2">
    <h2>Child 1</h2>
     <h2>Child 2</h2>
     </div>
     </div

*/

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
