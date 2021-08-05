import './App.css';
import {useState} from "react";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./Todo";

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
        <FormControl>
            <InputLabel>write a todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
            <Button disabled={!input} type="submit" onClick={addTodo} variant={"contained"} color={"primary"}>Add todo</Button>
        </form>

        <ul>
            {todos.map(todo =>(
                <Todo text = {todo}/>
            ))}
        </ul>
    </div>
  );
};

export default App;
