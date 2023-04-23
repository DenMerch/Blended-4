
import {
  Container,
  Header,
  SearchForm,
  TodoList,
  Section,
  Text,
} from 'components';
import { EditForm } from 'components/EditForm/EditForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selected';

export const App = () => {
  const todos = useSelector(selectTodos)
  const [isEditing, setIsEditing] = useState(false)
 
  
  return (
    <>
      <Header />
      <Section>
        <Container>
          {isEditing ? <EditForm setEditing = {setIsEditing} /> : <SearchForm />}

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ):<TodoList setEditing = {setIsEditing} />}
        </Container>
      </Section>
    </>
  );
};
