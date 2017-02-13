import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ]; //es6 spread to not mutate state

    default:
        return state;
  }
}
