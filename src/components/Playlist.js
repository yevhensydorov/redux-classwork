import React from 'react';
import PropTypes from 'prop-types';


const Playlist = ({playlist, receiveId}) => {
	console.log(playlist);
	let playlistBuilder = playlist.map( item => {
		console.log(item);
			const { snippet } = item;
	  	const { videoId } = item.id;
	  	const { title } = snippet;
	  	const { height, width, url } = item.snippet.thumbnails.default;
	  	const key = `playlistItem${videoId}`;

				return (
				 <li key={key}>
		      <div       
		        className="result-item"
		        onClick={ event => {
		          receiveId(videoId);
		      }}>
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
		}
	);

	
	return (
			<div>
				<h1>Playlist</h1>
				<ul className="results-list">
					{playlistBuilder}
				</ul>
			</div>
		);
};

Playlist.propTypes = {
	playlist: PropTypes.array.isRequired,
	receiveId: PropTypes.func
};

export default Playlist;