import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({searchRequest, updateQuery, query}) => {
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={event => {
        event.preventDefault();
        searchRequest(query);
      }}
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        onChange={event => updateQuery(event.target.value)}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};


SearchBar.propTypes = {
  searchRequest : PropTypes.func.isRequired,
  updateQuery : PropTypes.func.isRequired,
  query: PropTypes.string
};

export default SearchBar;
