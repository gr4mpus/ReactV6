import React from "react";
import Pet from "./pet";

const Results = ({ pets }) => {
  console.log("Pets ", pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pet Found</h2>
      ) : (
        pets.map(({ animal, id, name, breed, images, city, state }) => (
          <Pet
            animal={animal}
            key={id}
            name={name}
            breed={breed}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
