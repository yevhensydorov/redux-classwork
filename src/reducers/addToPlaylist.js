const addToPlaylist = (state = [], action) => {
	switch(action.type) {
		case 'SAVE_TO_PLAYLIST':
			return Object.assign([], state, {
				[action.results]: action.videoId
			});
		default:
			return state;
	}
};

export default addToPlaylist;