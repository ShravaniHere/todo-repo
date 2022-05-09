import React, {useState} from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {   //to remove multiple blank space
            return;
        }

        const newTodos = [todo, ...todos];  //make sure newly added todos are updated consistently
        setTodos(newTodos);
        console.log(newTodos);
    }

    return(
        <div>
            <h1>Tasks for today : </h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList