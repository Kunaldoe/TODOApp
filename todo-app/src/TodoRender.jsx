import React from 'react';
import './App.css';

function TodoRender({ todo, updateTodo }) {
  const onClickComplete = (id) => {
    updateTodo(id, { completed: true });
  };

  return (
    <div className="todo-list">
      {
        todo
          .filter((obj) => !obj.completed)
          .map((obj) => (
            <div key={obj.id} className="todo-item">
            <h3 className="todo-title">{obj.title}</h3>
            <p className="todo-description">{obj.description}</p>
              <a
                className='anchor'
                href="#"
                style={{ "--clr": "#7bd568" }}
                onClick={() => onClickComplete(obj.id)}
              >
                <span>Complete</span><i></i>
              </a>
            </div>
          ))
      }
    </div>
  );
}

export default TodoRender;
