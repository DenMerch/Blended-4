import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from 'redux/selected';
import { nanoid } from 'nanoid';
import { addTodo } from 'redux/todoSlice';

export const SearchForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const [query, setQuery] = useState('');
  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = todos.find(({ text }) => text === query);

    if (isExist) {
      return alert(`${query} already exist`);
    }

    const todo = {
      id: nanoid(),
      text: query,
    };

    dispatch(addTodo(todo));

    onSubmit(query);

    setQuery('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
