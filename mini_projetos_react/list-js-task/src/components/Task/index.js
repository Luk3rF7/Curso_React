import React from 'react';
import PropsType from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import './Task.css'

export default function Task({ handleEdit, handleDelete, tasks }) {
  return (
    <ul className="task" >
      {tasks.map((task, index) => (
        <li key={task}>
          <p>
            {task}
          </p>
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="close" />
          </span>
        </li>
      ))}
    </ul>
  )
}

Task.propsTypes = {
  handleEdit: PropsType.func.isRequired,
  handleDelete: PropsType.func.isRequired,
  tasks: PropsType.array.isRequirer,
}