import React, { useEffect, useState } from "react";
import List from "./List";
import Radio from "./Radio";

function App() {
  // API data after json()
  const [data, setData] = useState(null);
  // Number of Pokemon to display ex: url/${count}
  const [count, setCount] = useState(10);
  // Number offset Pokemon to display ex: url/offset=${offset}
  const [offset, setOffset] = useState(0);

  // count selector 10, 25, 100
  const ten = () => setCount(10);
  const twentyfive = () => setCount(25);
  const hundred = () => setCount(100);

  // Next button click handeler
  const clickHandler = () => setOffset(offset + count);
  // Previous button click handeler
  const prev = () => setOffset(offset - count);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${count}`)
      .then((response) => response.json())
      .then((info) => setData(info))
      .then(() => console.log(data));
  }, [offset, count]);

  return (
    <>
      <h1>Pokédex</h1>
      <br />

      <Radio ten={ten} twentyfive={twentyfive} hundred={hundred} />

      {data && (
        <List
          data={data}
          count={count}
          offset={offset}
          setCount={setCount}
        />
      )}

      <div class="d-grid gap-2 d-md-block">
        <button onClick={clickHandler} class="btn btn-primary" type="button">
          Next
        </button>
        <button onClick={prev} class="btn btn-primary" type="button">
          Previous
        </button>
      </div>
    </>
  );
}

export default App;
