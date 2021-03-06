import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({todos, completeTodo}) => {
  return (
    <section className="todos">    
      { todos.length > 0 && todos.map((todo, index) => {
        return <Todo key={index} text={todo.text} isCompleted={todo.isComplete} completeTodo={completeTodo} index={index} />
      })}
      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Add todo dulu dengan klik add diatas
        </div>
      )}
    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos
