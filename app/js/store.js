import { createStore, comps } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import reducers
import rootReducer from './reducers/index';

import spaceTypes from './components/pages/SpaceTypes/SpaceTypes';
import Amenities from './components/pages/Amenities/amenities';
import Spaces from './components/pages/Spaces/main';

const defaultState= {
	spaceTypes,
	Amenities,
	Spaces
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;