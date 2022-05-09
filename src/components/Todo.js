import React, { useState } from "react";
//import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, setTodoDone, removeTask }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    return (
        <div>
            {todos.map((todo, i) => {
                return (
                    <div key={i} >
                        <div  onClick={() => setTodoDone(todo.id)}>{todo.text}</div>
                        <div className="icons">
                            <RiCloseCircleLine className="delete" onClick={() => removeTask(todo.id)} />
                            <TiEdit className="edit" onClick={() => setEdit({ id: todo.id, value: todo.text })} />
                        </div>
                    </ div>)
            }
            )}

        </div>
    )
}

export default Todo;