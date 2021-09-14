import React from 'react';

// components
import TodoItem from './TodoItem';

// models
import Todo from '../models/todo';

// css
import classes from './Todos.module.scss'

const Todos: React.FC<{ items: Todo[]; deleteTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.list}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} deleteTodo={props.deleteTodo.bind(null, item.id)}/>
            ))}
        </ul>
    );
};

export default Todos;
