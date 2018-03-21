import {connect} from 'react-redux';
import History from '../components/History';
import {addToHistory} from '../actions';

const getHistory = state => {
	return state.history || [];
};

const mapStateToProps = state => {
	return ({
		history: getHistory(state)
	});
};

export default connect(
	mapStateToProps
)(History);