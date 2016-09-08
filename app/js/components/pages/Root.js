import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import App from './App';

function mapStateToProps(state) {
  return {
    spaceTypes :  state.spaceTypes,
	Amenities :  state.Amenities,
	Spaces :  state.Spaces
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Root = connect(mapStateToProps, mapDispachToProps)(App);
// const Root = connect(mapStateToProps)(App);

export default Root;
