import classes from './Todo.module.css';
import binIcon from './assets/bin.png'
import tickIcon from './assets/tick.png'


const Todo = ({ todos, removeTodo, toggleCompleted }) => {
    return <div>
        {todos.map((todo) => <div className={classes.itemWrapper} key={todo.id}>
            <div
                className={todo.completed ? classes.completed : classes.item}>{todo.task}
            </div>
            <div>
                <img src={tickIcon} className={classes.remover} onClick={() => toggleCompleted(todo.id)} />
                <img src={binIcon} className={classes.remover} onClick={() => removeTodo(todo.id)} />
            </div>
        </div>)}
    </div>
}

export default Todo;