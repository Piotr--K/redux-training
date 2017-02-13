//configures store on the startup of app
import {createStore, applyMiddleware} from 'redux'; //applyMiddleware is part of the redux, we importing it to enhance store
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())// in paranthesis we specify all middleware we want to utilise
  );
}
