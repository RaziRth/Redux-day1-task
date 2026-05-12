import { createSelector } from '@reduxjs/toolkit';

const selectTodoState = (state) => state.todos;

export const selectTodos = createSelector(
  [selectTodoState],
  (todosState) => todosState.items
);

export const selectTodoCount = createSelector(
  [selectTodos],
  (todos) => todos.length
);