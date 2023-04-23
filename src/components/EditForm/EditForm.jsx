import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import {
  InputSearch,
  SearchFormStyled,
} from 'components/SearchForm/SearchForm.styled';
import { BtnEdit, FormBtn } from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from 'redux/selected';
import { updateTodo } from 'redux/todoSlice';
export const EditForm = ({setEditing}) => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.edit.value;
    dispatch(updateTodo({ text: value, id: currentTodo.id }));
    setEditing(false)
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnEdit type="button" onClick={()=> setEditing(false)}>
        <MdOutlineCancel size="16px" color="red" />
      </BtnEdit>

      <FormBtn type="submit">
        <RiSaveLine size="16px" color="green" />
      </FormBtn>

      <InputSearch
        placeholder="EDIT TODO"
        name="edit"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </SearchFormStyled>
  );
};
