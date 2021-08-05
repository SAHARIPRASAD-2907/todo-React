import './App.css';
import {useEffect, useState} from "react";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase'
import firebase from "firebase"

function App() {
    const [todos, setTodos] = useState([])
  //  setting up short term memory
    const [input,setInput] = useState('')
    console.log(input)
    //when the app loads , we need to listen to the database and fetch new todos as they get added/removed
    useEffect(()=>{
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data().text))
            setTodos(snapshot.docs.map(doc => doc.data().text))
        })
    },[])
    const addTodo = (event)=>{
        //this will fire when we click in the button
        event.preventDefault()

        db.collection('todos').add({
            text: input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

        console.log("This is working ")
        setInput('')
    }
  return (
    <div className="App">
        <h1>My todo list 📝</h1>
        <form>
        <FormControl>
            <InputLabel>write a todo ✅</InputLabel>
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
