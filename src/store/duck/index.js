import todos from './todos';
import {combineReducers} from 'redux';

export default combineReducers({
  todos_state: todos,
});
