import { useState } from 'react';
import classes from "./App.module.css"

const TodoForm = ({ addTodo }) => {
    const [userInput, setUserInput] = useState('');
    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput('');
    }

    const onButtonClick = (e) => {
        handleSubmit(e);

    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return <form className={classes.form}>
        <input onKeyPress={onKeyPress} type="text" value={userInput}
            onChange={handleOnChange} placeholder='Enter your task...'>
        </input>
        <button className={classes.saveButton} onClick={onButtonClick}>Save</button>
    </form>
}


export default TodoForm;