const videoId = (state = 'xsSnOQynTHs', action) => {
	switch (action.type) {
		case 'RECEIVE_ID':
			return action.videoId;
		default:
			return state;
	}
};

export default videoId;