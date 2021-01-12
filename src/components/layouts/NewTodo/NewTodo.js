import React, {useState} from 'react'
import {change, submit} from "../../../store/actions"
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import "./NewTodo.css"

export default function NewTodo() {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo, shallowEqual);
    const [done, setDone] = useState(false);

    const handleSubmit = evt => {
        evt.preventDefault();
        setDone(true);
        dispatch(submit());
    }

    const handleChancge = evt => {
        const {value, name} = evt.target;
        dispatch(change(name, value))
    }

    const handleHide = () => setDone(false)

    return (
        <div className="New__Todo">
            {done && (
                <div className="alert__success">
                    Добавлено !
                    <button onClick={handleHide}>&times;</button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="input__item">
                    <label htmlFor="todo">Туду: </label>
                    <input
                        type="text"
                        id="todo"
                        name="name"
                        value={todo?.name || ""}
                        onChange={handleChancge}
                        placeholder="Новое тудо"/>
                </div>
                <div className="input__item">
                    <label htmlFor="date">Дата: </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={todo.date || ""}
                        onInput={handleChancge}/>
                </div>
                <div className="input__item">
                    <button>Ok</button>
                </div>
            </form>
            
        </div>

        
    )
}
