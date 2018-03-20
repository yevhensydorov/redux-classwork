import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {addToPlaylist} from '../actions';

const getPlaylist = (state) => {
	console.log(state.playlist);
	return state.playlist || [];
};

const mapStateToProps = state => ({
	playlist: getPlaylist(state)
});

export default connect(
	mapStateToProps
	)(Playlist);