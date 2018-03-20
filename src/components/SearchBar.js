import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render(){
    return (
      <form
        className="d-flex justify-content-center"
        onSubmit={event => {
          event.preventDefault();
          this.props.searchRequest(this.props.query);
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={event => this.props.updateQuery(event.target.value)}
          value={this.props.query}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
};

SearchBar.propTypes = {
  searchRequest : PropTypes.func.isRequired,
  updateQuery : PropTypes.func.isRequired,
  query: PropTypes.string
};

export default SearchBar;
