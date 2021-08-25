import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({showAddToogle, showAdd, clearTodos}) => {
  return (
    <section className="header">
      {/* <button className="header-btn" onClick={showAddToogle} > {showAdd ? 'Finish' : 'Add'} </button> */}
      <Button text={showAdd ? 'Finish' : 'Add'} onClick={showAddToogle} />
      <h1 className="header-title">Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos} >Clear</button> */}
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  )
}

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired,
}

export default Header
