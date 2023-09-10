import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parentDiv" }, [
  React.createElement("div", { id: "child1Div" }, [
    React.createElement("h1", {}, "This is from Namaste React "),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2Div" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
