import React from 'react';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
  render(){
    // console.log('props here', this.props);

    const { snippet } = this.props.result;
    const { videoId } = this.props.result.id;
    const { description, title } = snippet;
    const { height, width, url } = this.props.result.snippet.thumbnails.default;
    return (
      <li
        className="result-item"
        onClick={ event => {
          this.props.receiveId(videoId);
        }}
      >
        <img
          className="result-img"
          src={url}
          height={height}
          width={width}
        />
        <div className="result-description">
          <div>
            <strong>{title}</strong>
          </div>
          {description}
        </div>
      </li>
    );
  }
};

SearchResult.propTypes = {
  result : PropTypes.shape({
    id : PropTypes.shape({
      videoId: PropTypes.string
    }).isRequired,
    description: PropTypes.string,
    title: PropTypes.string,
    thumbnails :PropTypes.shape({
      default : PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        url: PropTypes.string,
      }),
    }),
  }),
  receiveId : PropTypes.func.isRequired
};

export default SearchResult;
