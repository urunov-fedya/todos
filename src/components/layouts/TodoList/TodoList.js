import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoItem  from '../TodoItem/TodoItem'

import "./TodoList.css";

export default function TodoList() {
    const todos = useSelector(state => state.todos, shallowEqual);
    
    // сортировка по приоритету
    todos.sort((a, b) => {
        if (a.priority < b.priority) return 1;
        if (a.priority > b.priority) return -1;
        return 0;
    });

    return (
        <>
        <div className="TodoList">
            <div className="todos__content">
                <ul>
                   {todos.map((t, i) => <TodoItem key={t.id} todo={t} index={i} />)} 
                </ul>
            </div>
        </div>
        </>
    )
}
