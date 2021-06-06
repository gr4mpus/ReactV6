import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Parrot",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Pug",
//     }),
//   ]);
// };

const App = () => (
  <div>
    <h1>Adopt Me</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Parrot" />
    <Pet name="Sudo" animal="Dog" breed="Pug" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
