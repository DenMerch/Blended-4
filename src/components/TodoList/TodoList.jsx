import {
  Grid,
  GridItem,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selected';

export const TodoList = ({setEditing}) => {
    const todos = useSelector(selectTodos);

    return <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    setEditing={setEditing}
                  />
                </GridItem>
              ))}
          </Grid>
}
