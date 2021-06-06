import React from "react";

const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.type),
    React.createElement("h3", {}, props.breed),
  ]);

export default Pet;
