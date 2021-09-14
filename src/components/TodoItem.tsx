import React from 'react';

// css
import classes from './TodoItem.module.scss';

const TodoItem: React.FC<{text: string; deleteTodo: () => void}> = (props) => {
    return (
        <li className={classes.item} onClick={props.deleteTodo}>{props.text}</li>
    );
};

export default TodoItem;
