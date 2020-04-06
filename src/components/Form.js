import React from "react";
import PropTypes from "prop-types";

const Form = ({ setSearch, setInput, input }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          setSearch(input);
          e.preventDefault();
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  setSearch: PropTypes.func,
  setInput: PropTypes.func,
  input: PropTypes.string
};

export default Form;
