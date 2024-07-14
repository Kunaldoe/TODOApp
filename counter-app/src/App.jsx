import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
   <div>
    <RenderComponent count={count} setCount={setCount}/>
    <RenderComponent count={count+1} setCount={setCount}/>
    <RenderComponent count={count-1} setCount={setCount}/>
    <RenderComponent count={count*100} setCount={setCount}/>
   </div>
  )
}
function RenderComponent(props){
  function onclickHandeler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onclickHandeler}>Count {props.count}</button>
}

export default App
