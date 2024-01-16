import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="htag">Hello World 📈👨‍💻 </h1>; // Functional Component
const para = <p className="htag">Hello World 📈👨‍💻 </p>; // React ELement

const Page = () => {
  return (
    <div>
      Three ways of accessing the component
      <Title />
      <Title></Title>
      {Title()}
      {para}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(para) for React ELements Syntax
root.render(<Page />);
