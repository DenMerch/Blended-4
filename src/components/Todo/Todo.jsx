import { useDispatch } from 'react-redux';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, EditButton, TodoWrapper } from './Todo.styled';
import { deleteTodo, addCurrentTodo } from 'redux/todoSlice'

export const Todo = ({ text, counter, id, setEditing }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <EditButton type="button" 
        onClick={() => {setEditing(true);
        dispatch(addCurrentTodo({text,id}))}}>
          <RiEdit2Line size={24} />
        </EditButton>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
