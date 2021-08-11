import React, { useEffect, useState } from "react";

function Image({ pokeId, count, offset }) {
  const [pokeDetails, setPokeDetails] = useState(null);
  console.log(pokeId);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      .then((response) => response.json())
      .then((res) => setPokeDetails(res))
      .then((res) => console.log(pokeDetails));
  }, [pokeId, count, offset]);

  return (
    <>
      {pokeDetails && (
        <img
          src={pokeDetails.sprites.front_default}
          className="card-img-top"
          alt=""
        />
      )}
    </>
  );
}

export default Image;
