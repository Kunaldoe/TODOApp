import { useState } from 'react';
import TodoRender from './TodoRender'
import ButtonToAdd from './ButtonToAdd';
function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (newTodo) => {
    setTodo(prevTodos => [...prevTodos, newTodo]);
  };
  const updateTodo = (id, updates) => {
    setTodo(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    ));
  };
  return (
    <div>
    <ButtonToAdd addTodo={addTodo} />
    <div>List Of TODO's</div>
    <TodoRender todo={todo} updateTodo={updateTodo} />
    </div>
  )
 
}
export default App
