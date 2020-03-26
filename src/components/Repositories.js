import React from "react";
import PropTypes from "prop-types";

const Repositories = ({ repositories }) => {
  return (
    <div>
      <ul>
        {repositories.map(repository => (
          <li key={repository.id}>
            <h1>{repository.name}</h1>
            <p>{repository.created_at}</p>
            <p>{repository.homepage}</p>
            <p>{repository.watchers} views</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.array
};

export default Repositories;
