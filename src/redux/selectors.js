export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter = { filter: "" }) => {
  const allTodos = getTodos(store);
  if (visibilityFilter.filter) {
    return allTodos.filter(itm => itm.name.includes(visibilityFilter.filter)).sort((a, b) => b.favourite - a.favourite)
  }
  return allTodos.sort((a, b) => b.favourite - a.favourite);
}
