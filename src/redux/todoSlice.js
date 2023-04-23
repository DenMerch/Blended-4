import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: {} },

  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },

    addCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
    updateTodo(state, action) {
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});
const persistConfig = {
  key: 'todos',
  storage,
};

export const { addTodo, deleteTodo, addCurrentTodo, updateTodo } = todosSlice.actions;

export const todosReducer = persistReducer(persistConfig, todosSlice.reducer);
