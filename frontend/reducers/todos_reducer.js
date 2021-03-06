import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODOS:
      let arr = action.todos;
      let newState = {};
      arr.forEach((todo) => {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
