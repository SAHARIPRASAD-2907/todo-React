import './App.css';
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState(['Take dogs for a walk','Take the rubbish out','kumar mass da'])
  //  setting up short term memory
    const [input,setInput] = useState('')
    console.log(input)

    const addTodo = (event)=>{
        //this will fire when we click in the button
        event.preventDefault()
        console.log("This is working ")
        setTodos([...todos,input])
        setInput('')
    }
  return (
    <div className="App">
        <h1>Hello world </h1>
        <form>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <button type="submit" onClick={addTodo}>Add todo</button>
        </form>

        <ul>
            {todos.map(todo =>(
                <li>{todo}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
