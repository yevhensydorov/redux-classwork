import React from 'react';
import PropTypes from 'prop-types';


const Playlist = ({playlist}) => {
	return (
			<div>
				{playlist}
			</div>
		);
};

Playlist.propTypes = {
	playlist: PropTypes.array.isRequired
};

export default Playlist;