import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [repositories, setRepositories] = useState(null);
  const [input, setInput] = useState("");

  const getData = async () => {
    const clientId = "Iv1.a67655c04e7c20e9";
    const clientSecret = "97482de1f3015deeef2a16900ce8c5b851630ce3";
    const repoCount = 5;

    const res = await fetch(
      `https://api.github.com/search/repositories?q=${input}&client_id=${clientId}&client_secret=${clientSecret}&per_page=${repoCount}`
    );

    const data = await res.json();

    setRepositories(data);
  };

  const handleInput = e => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>it's working</p>
      <form onSubmit={getData}>
        <div>
          <label>Text: {input}</label>
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Enter text"
          />
        </div>
        <button>Search</button>
      </form>
      {/* <ul>
        {repositories.map(repository => {
          return <li>{repository}</li>;
        })}
      </ul> */}
    </React.Fragment>
  );
};

export default App;
