import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {   //to remove multiple blank space
            return;
        }

        const newTodos = [todo, ...todos];  //make sure newly added todos are updated properly
        setTodos(newTodos);
    };

    const setTodoDone = id => {
        let updatedTodos = todos.map( (todo) => {
            if(todo.id === id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const removeTask = id => {
        let remainingTasks = [...todos].filter(todo => todo.id !== id)
        setTodos(remainingTasks);
    }

    // const updateTask = (todoId, newTodo) => {
    //     if(!newTodo.text || /^\s*$/.test(newTodo.text)) {   //to remove multiple blank space
    //         return;
    //     }
    //     setTodos(prev => prev.map(todo => (todo.id === todoId ? newTodo : todo)));
    // }

    return(
        <div> 
            <div className="header">
                <h1>Tasks for today : </h1>                
                <TodoForm onSubmit={addTodo} />
            </div>
            <Todo todos={todos} setTodoDone={setTodoDone} removeTask={removeTask}  />
        </div>
    )
}

export default TodoList