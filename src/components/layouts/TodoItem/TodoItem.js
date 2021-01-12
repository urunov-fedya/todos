import React from 'react'
import { useDispatch } from 'react-redux'
import { done, edit, remove } from '../../../store/actions'

import "./TodoItem.css"

export default function TodoItem({todo, index}) {
    const dispatch = useDispatch();

    const {name, date, priority} = todo;

    const handleDone = () => {
        dispatch(done(todo.id));
    }
    
    const handleEdit = () => {
        document.querySelector(".overview").classList.toggle("active");
        document.querySelector(".Modal").classList.toggle("active");
        dispatch(edit(todo.id))
    };

    const handleRemove = () => {
        dispatch(remove(todo.id));
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
                <div className="todo__date">
                    {date}
                </div>
                <div className="todo__priority">
                    {priority}
                </div>
                <div className="todo__func">
                    <button
                        className="todo__edit"
                        onClick={handleEdit}>
                        &#9998;
                    </button>
                    <button
                        className="btn__close"
                        onClick={handleRemove}>
                        &times;
                    </button>
                </div>
            </label>
        </li>
    )
}
