import React, { useState, useEffect } from 'react';
import TodoRender from './TodoRender';
import ButtonToAdd from './ButtonToAdd';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // Fetch initial todos from the server
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/todo');
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await fetch('http://localhost:5000/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      const addedTodo = await response.json();
      setTodo((prevTodo) => [...prevTodo, addedTodo.todo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo = await response.json();
      setTodo((prevTodo) =>
        prevTodo.map((todo) => (todo._id === id ? updatedTodo.todo : todo))
      );

      // Remove the completed todo from the state
      setTodo((prevTodo) =>
        prevTodo.filter((todo) => todo._id !== id || !updatedData.completed)
      );
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div>
      <ButtonToAdd addTodo={addTodo} />
      <TodoRender todo={todo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
