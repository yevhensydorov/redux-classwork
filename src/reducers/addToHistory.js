const addToHistory = (state = [], action) => {
	switch(action.type) {
		case 'SAVE_TO_HISTORY':
			return state.concat(action.result);
		default:
			return state;
	}
};

export default addToHistory;