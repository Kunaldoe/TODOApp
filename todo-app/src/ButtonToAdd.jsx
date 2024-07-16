import React, { useState } from 'react';
import './ButtonToAdd.css';

function ButtonToAdd({ addTodo }) {
  const [lastId, setLastId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClick = () => {
    if (!title.trim()) {
      return;
    }
    const objToAdd = {
      id: lastId.toString(),
      title,
      description,
      completed: false,
    };
    addTodo(objToAdd);
    setLastId(lastId + 1);
    setTitle('');
    setDescription('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  return (
    <div className="container" id="button-container">
      <input
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleInputChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleInputChange}
      />
      <a
        style={{ "--clr": "#1e9bff" }}
        onClick={onClick}
      >
        <span>Add To Bucket</span><i></i>
      </a>
    </div>
  );
}

export default ButtonToAdd;
