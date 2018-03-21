import { combineReducers } from 'redux';
import query from './query';
import search from './search';
import videoId from './videoId';
import addToPlaylist from './addToPlaylist';
import addToHistory from './addToHistory';

export default combineReducers({
  query,
  search,
  videoId,
  playlist: addToPlaylist,
  history: addToHistory
});
