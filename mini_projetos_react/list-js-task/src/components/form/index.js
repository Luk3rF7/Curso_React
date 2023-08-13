import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

import PropsTypes from 'prop-types';
export default function Form({ handleChange, handleSubmit, newTask }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        type="text"
        value={newTask}
        placeholder='Digite sua tarefa' />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )

}

Form.propsTypes = {
  handleChange: PropsTypes.func.isRequired,
  handleSubmit: PropsTypes.func.isRequired,
  newTask: PropsTypes.string.isRequired,
}