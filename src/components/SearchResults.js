import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchResults = ({results, receiveId, addToPlaylist}) => {
  return (
    <div>
      <h1>Results</h1>
      <ul className="results-list">
        {results.map( result => {
          return <SearchResult
            receiveId={receiveId}
            result={result}
            key={result.id.videoId}
            addToPlaylist={addToPlaylist}
          />;
        })}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
  receiveId: PropTypes.func.isRequired,
  addToPlaylist: PropTypes.func
};

export default SearchResults;
