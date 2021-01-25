import React, { Suspense, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { save } from "./store/actions"

import Header from "./components/Header/Header";
import Loading from "./components/layouts/Loading/Loading";
// import ErrorBoundary from "./components/Layout/Error/ErrorBoundary";

import "./App.css";

/*
  Фидбэки: почему ErrorBoundary работает не правильно
           как правильно работать с localStorage + redux [+]
  Ответы: ...
*/

export default function App() {
  const todos = useSelector(state => state.todos, shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("storeTodos")) {
      const readToTodos = JSON.parse(localStorage.getItem("storeTodos"));
      dispatch(save(readToTodos));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("storeTodos", JSON.stringify(todos))    
  }, [todos]);

  return (
    <>
      {/* <ErrorBoundary> */}
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      {/* </ErrorBoundary> */}
    </>
  );
}
