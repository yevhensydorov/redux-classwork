import { combineReducers } from 'redux';
import query from './query';
import search from './search';
import videoId from './videoId';

export default combineReducers({
  query,
  search,
  videoId
});
