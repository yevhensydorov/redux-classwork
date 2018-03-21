import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {receiveId, addToPlaylist} from '../actions';

const getPlaylist = (state) => {
	return state.playlist || [];
};

const mapDispatchToProps = dispatch => ({
	receiveId: videoId => dispatch(receiveId(videoId))
});

const mapStateToProps = state => {
	return ({
		playlist: getPlaylist(state)
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Playlist);