import React, {useState} from 'react';
import Todo from '../models/todo';

const TodosContext = React.createContext<{
    items: Todo[];
    addTodo: () => void;
    removeTodo: (id: string) => void;
}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
    useState();

    return (
        <TodosContextProvider>
            {props.children}
        </TodosContextProvider>
    )
}
