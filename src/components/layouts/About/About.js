import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import telegram from '../../../img/telegram.png'
import github from '../../../img/github.png'
import linkedin from '../../../img/linkedin.png'

import "./About.css";

export default function About() {
    const author = useSelector(state => state.author, shallowEqual)
    return (
        <div className="author__container">
            <div className="author__item">
                <img src={author.img} alt="author"/>
                <div className="links">
                    <a href={author.links.github} target="_blank" rel="noreferrer">
                        <img src={github} alt=""/>
                    </a>
                    <a href={author.links.linkedin} target="_blank" rel="noreferrer">
                        <img src={linkedin} alt=""/>
                    </a>
                    <a href={author.links.telegram} target="_blank" rel="noreferrer">
                        <img src={telegram} alt=""/>
                    </a>
                </div>
            </div>
            <div className="author__item">
                <div className="name">{author.name} {author.surname}</div>
                <div className="job">{author.job}</div>
            </div>
        </div>
    )
}
