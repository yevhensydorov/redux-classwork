import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {
  render(){
    return (
      <div>
        <ul className="results-list">
          {this.props.results.map( result => {
            return <SearchResult
              receiveId={this.props.receiveId}
              result={result}
              key={result.id.videoId}
            />;
          })}
        </ul>
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.array,
  receiveId: PropTypes.func.isRequired
};

export default SearchResults;
