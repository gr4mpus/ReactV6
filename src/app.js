import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Luna", type: "Dog", breed: "Havanese" }),
    React.createElement(Pet, { name: "Pepper", type: "Bird", breed: "Parrot" }),
    React.createElement(Pet, { name: "Sudo", type: "Dog", breed: "Pug" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
