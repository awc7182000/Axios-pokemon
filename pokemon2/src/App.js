import './App.css';
import React, { useState } from 'react';
import axios from 'axios'

function App() {
  const [results,setResults] = useState([]);
    const Pokemon = (() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then ((res => {
        setResults(res.data)
      }))
      .catch((err) => console.log(err));
    })
return (
  <div className="App">
    <button onClick={Pokemon}> Fetch Pokemon</button>
      {results.count ? (<div>
      {results.results.map((poke,index) => (
        <ul>
          <li key = {index}>{poke.name}</li>
        </ul>
      ))}
      </div>
      ) : null}
      </div>
);
}
export default App;