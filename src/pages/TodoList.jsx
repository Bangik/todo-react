import React, {useState} from 'react';
import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {text: "Belajar React1", isComplete: false},
    {text: "Belajar React2", isComplete: false},
    {text: "Belajar React3s ", isComplete: false}
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {

    if(todos.length < 7){
      const addedTodo = [...todos, {text: value, isComplete: false}];
  
      setTodos(addedTodo);
    }else{
      alert('todo full')
    }
    
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isComplete = !addedTodo[index].isComplete;

    setTodos(addedTodo);
  }

  const clearTodos = () => setTodos([])

  const showAddToogle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToogle={showAddToogle} showAdd={showAdd} clearTodos={clearTodos} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoList;
