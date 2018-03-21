const addToPlaylist = (state = [], action) => {
	console.log(state, action);
	switch(action.type) {
		case 'SAVE_TO_PLAYLIST':
			return state.concat(action.videoId);
		default:
			return state;
	}
};

export default addToPlaylist;