import React, {useState} from 'react';
import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {text: "Belajar React1"},
    {text: "Belajar React2"},
    {text: "Belajar React3s "}
  ]);

  const addTodo = value => {
    const addedTodo = [...todos, {text: value}];

    setTodos(addedTodo);
  }

  return (
    <Paper>
      <Header/>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos}  />
    </Paper>
  );
}

export default TodoList;
