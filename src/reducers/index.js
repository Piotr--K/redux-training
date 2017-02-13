//root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses //this should be courses: courses but left side is the same as right
          // so we use synthantic sugar; es6 shorthand property name
          //name will impact how i access state throut the applicaction. so in
          //container components we will call state.courses.
});

export default rootReducer;
