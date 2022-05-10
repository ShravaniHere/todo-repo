import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ todos, setTodoDone, removeTask }) => {

    return (
        <div>
            {todos.map((todo, i) => {
                return (
                    <div key={i} className="todo-item">
                        <div className="todo-text" onClick={() => setTodoDone(todo.id)}>{todo.text}</div>
                        <div className="icons">
                            <RiCloseCircleLine className="delete" onClick={() => removeTask(todo.id)} />
                        </div>
                    </ div>)
            }
            )}

        </div>
    )
}

export default Todo;