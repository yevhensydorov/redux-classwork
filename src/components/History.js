import React from 'react';
import PropTypes from 'prop-types';

const History = ({history}) => {
	let historyBuilder = history.map( item => {
		const { snippet } = item;
  	const { videoId } = item.id;
  	const { title } = snippet;
  	const { height, width, url } = item.snippet.thumbnails.default;
  	const key = `historylistItem${videoId}`;

  	return (
  		<li key={key}>
		    <div className="result-item">
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
		      </div>

		    </div>
		  </li>
  	);
	});

	return (
		<div>
			<h1>History</h1>
			<ul className='results-list'>
				{historyBuilder}
			</ul>
		</div>
	);
};

History.propTypes = {
	history: PropTypes.array
};

export default History;