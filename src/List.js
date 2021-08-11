import React from "react";
import Image from "./Image";

function List({ data, setCount, count, offset }) {
  const pokeList = data.results;

  return (
    <div className="d-flex flex-wrap">
      {pokeList.map((item, index) => (
        <div className="card" style={{ width: "10rem" }}>
          <Image pokeId={index + 1 + offset} count={count} offset={offset} />
          <div className="card-body">
            <p className="card-text">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
