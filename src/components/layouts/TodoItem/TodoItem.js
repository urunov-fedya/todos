import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { done, remove } from '../../../store/actions'

import "./TodoItem.css"

export default function TodoItem({todo, index}) {
    const state = useSelector(state => state, shallowEqual);
    
    const dispatch = useDispatch();
    const {name} = todo;

    const handleDone = () => {
        dispatch(done(todo.id));
        console.log(todo.id)
    }
    
    const handleRemove = () => {
        dispatch(remove(todo.id));
        console.log(todo.id)
        localStorage.setItem("state", JSON.stringify(state))
    }

    return (
        <li className="todo">
            <label htmlFor={`check-${todo.id}`} className={todo.done ? "done" : undefined}>
                <div className="name__input">
                    <div className="todo__id">
                        {index + 1}
                    </div>
                    <input
                        name="check"
                        checked={todo.done || ""}
                        onChange={handleDone}
                        type="checkbox"
                        id={`check-${todo.id}`}/>
                    <div className="todo__name">{name}</div>
                </div>
                <button
                    className="todo__remove"
                    onClick={handleRemove}>
                    &times;
                </button>
            </label>
        </li>
    )
}
