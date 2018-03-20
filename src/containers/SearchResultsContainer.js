import {connect} from 'react-redux';
import SearchResults from '../components/SearchResults';
import {receiveId} from '../actions';

const getResults = (state) => {
  return state.search[state.query] || [];
};

const mapStateToProps = state => ({
	results: getResults(state)
});

const mapDispatchToProps = dispatch => ({
	receiveId: videoId => dispatch(receiveId(videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
