import React from 'react'
import NewTodo from '../NewTodo/NewTodo'

import "./Modal.css"

export default function Modal() {
    const handleCloseModal = () => {
        document.querySelector(".overview").classList.remove("active");
        document.querySelector(".Modal").classList.remove("active");
    };
    
    return (
        <div className="Modal">
            <div className="modal__header">
                <h3>Изменить</h3>
                <button className="btn__close" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="modal__body">
                <NewTodo />
            </div>
        </div>
    )
}
