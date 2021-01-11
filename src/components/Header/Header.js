import React from "react";

import "./Header.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const About = React.lazy(() => import("../layouts/About/About"));
const NewTodo = React.lazy(() => import("../layouts/NewTodo/NewTodo"));
const Todos = React.lazy(() => import("../layouts/TodoList/TodoList"));
const Error = React.lazy(() => import("../layouts/Error/ErrorNotFound"));

function Header() {
  return (
    <>
      <Router>
        <header>
          <div className="logo">
            <Link to="/">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-64.png"
                alt="react"
              />
              <strong>React</strong>
              <span>TodoList</span>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Листы
                </NavLink>
              </li>
              <li>
                <NavLink to="/new">Создать</NavLink>
              </li>
              <li>
                <NavLink to="/about">Инфо</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Todos} />
            <Route path="/new" component={NewTodo} />
            <Route path="/about" component={About} />
          <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Header;
