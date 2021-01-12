import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoItem  from '../TodoItem/TodoItem'

import "./TodoList.css";

export default function TodoList() {
    const todos = useSelector(state => state.todos, shallowEqual);
    const [tods, setTods] = useState(todos);

    // сортировка по приоритету
    tods.sort((a, b) => {
        if (+a.priority < +b.priority) return 1;
        if (+a.priority > +b.priority) return -1;
        return 0;
    });

    const handleChangeFilter = evt => {
        const { value } = evt.target;

        switch(value) {
            case "done":
                return setTods(todos.filter(t => t.done === true));
            case "notDone":
                return setTods(todos.filter(t => t.done === false));
            default:
                return setTods(todos);
        }
    };
    useEffect(() => {
        setTods(todos)
    }, [todos])


    return (
        <div className="TodoList">
            <div className="todos__header">
                <select onChange={handleChangeFilter}>
                    <option value="all">Все</option>
                    <option value="done">Сделанные</option>
                    <option value="notDone">Не сделанные</option>
                </select>
            </div>
            <div className="todos__content">
                <ul>
                   {tods.map((t, i) => <TodoItem key={t.id} todo={t} index={i} />)} 
                </ul>
            </div>
        </div>
    )
}
