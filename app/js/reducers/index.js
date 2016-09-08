import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import amenities from './amenitiesReducer';
import spaceTypes from './spaceTypesReducer';
import spaces from './spacesReducer';

var rootReducer = combineReducers({ spaceTypes, amenities, spaces, routing: routerReducer })

// var rootReducer = combineReducers({ spaceTypes, routing: routerReducer })


export default rootReducer;