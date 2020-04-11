import React from "react";
import PropTypes from "prop-types";
import "./Repositories.css";

const Repositories = ({ repositories, loading }) => {
  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="results">
      <ul className="elements">
        {repositories.map((repository) => (
          <li className="item" key={repository.id}>
            <h1 className="info info-name">{repository.name}</h1>
            <p className="info">Created at: {repository.created_at}</p>
            <p className="info">{repository.homepage}</p>
            <p className="info">{repository.watchers} stars</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.array,
};

export default Repositories;
