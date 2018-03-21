const addToPlaylist = (state = [], action) => {
	switch(action.type) {
		case 'SAVE_TO_PLAYLIST':
			return state.concat(action.result);
		default:
			return state;
	}
};

export default addToPlaylist;