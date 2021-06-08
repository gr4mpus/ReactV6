import React from "react";

// const Pet = (props) =>
//   React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);

const Pet = ({ name, animal, breed, images, location, id }) => {
  console.log("Props ");
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal.toUpperCase()} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
