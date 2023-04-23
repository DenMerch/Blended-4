import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },

  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteTodo(state, action) {},
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
