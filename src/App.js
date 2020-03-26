import React, { useState, useEffect } from "react";
import axios from "axios";
import Repositories from "./components/Repositories";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const clientId = "Iv1.a67655c04e7c20e9";
      const clientSecret = "97482de1f3015deeef2a16900ce8c5b851630ce3";
      const repoCount = 5;

      const result = await axios(
        `https://api.github.com/search/repositories?q=${search}&client_id=${clientId}&client_secret=${clientSecret}&per_page=${repoCount}`
      );

      setRepositories(result.data.items);
    };

    getData();
  }, [search]);

  return (
    <React.Fragment>
      <Form input={input} setInput={setInput} setSearch={setSearch} />
      <Repositories repositories={repositories} />
    </React.Fragment>
  );
};

export default App;
