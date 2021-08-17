import React from 'react';
import Todo from './Todo';

const Todos = () => {
  const todos = [
    {
      text: "React 1"
    },
    {
      text: "React 2"
    },
    {
      text: "React 3"
    },
  ]
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text}/>
      })}
    </section>
  )
}

export default Todos
