import * as actions from '../../src/actions/index';
import fetchMock from 'fetch-mock'

const singleResultDummyData = require('../dummyData/SingleResultDummyData');
const searchQueryDummyData = require('../dummyData/SearchQueryDummyData.js')

describe('actions',  () => {
	it('should create an action to update query', () => {
		const text = 'Kitten';
		const expectedAction = {
			type: 'UPDATE_QUERY',
			query: 'Kitten'
		}
		expect(actions.updateQuery(text)).toEqual(expectedAction)
	});
});

describe('actions', () => {
	it('should create an action to receive ID', () => {
		const id = 'xsSnOQynTHs';
		const expectedAction = {
			type: 'RECEIVE_ID',
			videoId: 'xsSnOQynTHs'
		}
		expect(actions.receiveId(id)).toEqual(expectedAction)
	});
});

describe('actions', () => {
	it('should create an action to add to playlist', () => {
		const asAPIDummyData = singleResultDummyData.default;
		const expectedAction = {
			type: 'SAVE_TO_PLAYLIST',
			result: asAPIDummyData
		}
		expect(actions.addToPlaylist(asAPIDummyData)).toEqual(expectedAction)
	});
});

describe('actions', () => {
	it('should create an action to add to history', () => {
		const asAPIDummyData = singleResultDummyData.default;
		const expectedAction = {
			type: 'SAVE_TO_HISTORY',
			result: asAPIDummyData
		}
		expect(actions.addToHistory(asAPIDummyData)).toEqual(expectedAction)
	});
});

describe('actions', () => {
	it('should create an action to receive search', () => {
		const asAPIDummyData = searchQueryDummyData.default;
		const expectedAction = {
			type: 'RECEIVE_SEARCH',
			results: asAPIDummyData.items,
			query: 'surfing'
		}
		expect(actions.receiveSearch(asAPIDummyData, 'surfing')).toEqual(expectedAction);
	})
})

// describe('fetch data', () => {
	
// })