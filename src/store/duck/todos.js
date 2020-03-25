import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  addTodo: ['txt'],
  removeTodo: ['txt'],
  editTodo: ['id', 'txt'],
});

const INITIAL_STATE = {todos: []};

const addTodo = (state, action) => ({
  ...state,
  todos: [...state.todos, {id: Math.random(), txt: action.txt}],
});

const removeTodo = (state, action) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== action.id),
});

const editTodo = (state, action) => ({
  ...state,
  //todos: [{txt: action.txt}],
  todos: state.todos.map(todo =>
    todo.id === action.id ? {...todo, txt: action.txt} : todo,
  ),
});
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo,
  [Types.EDIT_TODO]: editTodo,
});
