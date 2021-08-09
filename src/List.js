import React from "react";

function List({ data, setCount, count, offset }) {
  const pokeList = data.results;

  const list = pokeList.map((item, index) => (
    
    <div className="card" style={{ width: "10rem" }}>
      <p>{offset + index + 1}</p>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
      </div>
    </div>
    
  ));

  return <div className="d-flex flex-wrap">{list}</div>;
}

export default List;
