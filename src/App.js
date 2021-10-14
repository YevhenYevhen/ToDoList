import Todo from "./Todo";
import { useState } from 'react';
import TodoForm from "./TodoForm";
import classes from "./App.module.css"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (userInput) => {
    if (userInput) {
      const task = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        completed: false
      }
      setTodos(
        [...todos, task]

      )
    }
  }

  const removeTodo = (id) => {
    setTodos(
      [...todos.filter((todo) => id !== todo.id)]
    )
  }
  const toggleCompleted = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      )]
    )
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div>
          <header>
            <h1>
              ToDo list: {todos.length}
            </h1>
          </header>
          <div className={classes.formContainer}>
            <TodoForm addTodo={addTodo} />
          </div>
          <Todo toggleCompleted={toggleCompleted} removeTodo={removeTodo} todos={todos} />
        </div>
      </div>
    </div>
  )
}

export default App;
