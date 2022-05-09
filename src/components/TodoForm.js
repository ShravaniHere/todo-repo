import React, {useState} from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        });

        setInput('');
    };

   const handleChange = (evt) => {
    setInput(evt.target.value)
   }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type='text' placeholder='Add task' value={input} name='text'className='todo-input'
            onChange={handleChange} />
            <button className="todo-button" > Add Task</button> 
        </form>
    )
}

export default TodoForm