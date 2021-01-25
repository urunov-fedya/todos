import React, { Suspense } from "react";

import Header from "./components/Header/Header";
import Loading from "./components/layouts/Loading/Loading";
// import ErrorBoundary from "./components/Layout/Error/ErrorBoundary";

import "./App.css";

/*
  Фидбэки: почему ErrorBoundary работает не правильно
           как правильно работать с localStorage + redux
  Ответы: ...
*/

export default function App() {
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
