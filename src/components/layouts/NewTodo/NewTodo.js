import React, { useState, useRef } from 'react'
import { change, submit } from "../../../store/actions"
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import "./NewTodo.css"

export default function NewTodo() {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo, shallowEqual);
    const [done, setDone] = useState(false);
    const firstInput = useRef(null);

    const handleCloseModal = () => {
        document.querySelector(".overview").classList.remove("active");
        document.querySelector(".Modal").classList.remove("active");
    };

    const handleSubmit = evt => {
        handleCloseModal();
        evt.preventDefault();
        setDone(true);
        dispatch(submit());
        firstInput.current.focus();
    }

    const handleChancge = evt => {
        const {value, name} = evt.target;
        dispatch(change(name, value))
    }

    const handleHide = () => setDone(false)

    return (
        <div className="New__Todo">
            {done && window.location.pathname === "/new" && (
                <div className="alert__success">
                    Добавлено !
                    <button onClick={handleHide}>&times;</button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="input__item">
                    <label htmlFor="todo">Туду: </label>
                    <input
                        ref={firstInput}
                        type="text"
                        id="todo"
                        name="name"
                        value={todo?.name || ""}
                        onChange={handleChancge}
                        placeholder="Новое тудо"
                        required/>
                </div>
                <div className="input__item">
                    <label htmlFor="date">Дата: </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={todo.date || ""}
                        onInput={handleChancge}
                        required/>
                </div>
                <div className="input__item">
                    <label htmlFor="number">Приоритет: </label>
                    <input
                        type="number"
                        id="number"
                        name="priority"
                        min="1"
                        value={todo.priority || ""}
                        onInput={handleChancge}
                        placeholder="Приоритет"
                        required/>
                </div>
                <div className="input__item">
                    <button>Ok</button>
                </div>
            </form>
            
        </div>

        
    )
}
