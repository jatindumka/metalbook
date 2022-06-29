import { ADD_TODO, TOGGLE_TODO, SET_FILTER ,DELETE_TODO, SEARCH_TODO} from "./actionTypes";

export const addTodo = name => ({
  type: ADD_TODO,
  payload: {
    id: Date.parse(new Date()),
    name
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
