import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchResults = ({results, receiveId}) => {
  return (
    <div>
      <ul className="results-list">
        {results.map( result => {
          return <SearchResult
            receiveId={receiveId}
            result={result}
            key={result.id.videoId}
          />;
        })}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
  receiveId: PropTypes.func.isRequired
};

export default SearchResults;
