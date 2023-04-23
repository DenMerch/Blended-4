
import {
  Container,
  Header,
  SearchForm,
  TodoList,
  Section,
  Text,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selected';

export const App = () => {
  const todos = useSelector(selectTodos)
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ):<TodoList />}
        </Container>
      </Section>
    </>
  );
};
