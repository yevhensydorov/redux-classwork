import {connect} from 'react-redux';
import Player from '../components/Player';
import {receiveId} from '../actions';

const getVideoId = (state) => {
	return state.videoId;
};

const mapStateToProps = state => ({videoId: getVideoId(state)});

export default connect(
	mapStateToProps
	)(Player);

