import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ setSearch, setInput, input, setLoading }) => {
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          if (input !== "") {
            setLoading(true);
          }
          setSearch(input);
          e.preventDefault();
          setInput("");
        }}
      >
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter repository name"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  setSearch: PropTypes.func,
  setInput: PropTypes.func,
  input: PropTypes.string,
};

export default Form;
