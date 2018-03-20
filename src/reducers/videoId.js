const videoId = (state = '', action) => {
	switch (action.type) {
		case 'RECEIVE_ID':
			return Object.assign({}, state, {
				videoId: action.videoId
			});
		default:
			return state;
	}
};

export default videoId;