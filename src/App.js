import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  const inputHandler = (e) => {
    console.log(e);
    setInput(e.target.value);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((item) => item.id!== id));
  };

  const addHandler = () => {
    setTodos([...todos, { id: new Date().toISOString(), text: input }]);
    setInput('');
  };

  const editHandler = () => {}

  return (
    <div className="App">
      <div>
        <input type="text" onKeyUp={(e) => {
          
          if(e.code === 'Enter') {
          addHandler()
        }}} onChange={inputHandler} value={input}/>
        <button onClick={addHandler}>Add</button>
      </div>
      <div>
        {todos.map((item) => {
          return <Todo key={item.id} id={item.id} text={item.text} deleteHandler={deleteHandler} />;
        })}
      </div>
      
    </div>
  );
}

export default App;
