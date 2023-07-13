
import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './protectedrouter/Productedrouter';
import React, { Suspense, lazy } from 'react';
const Homepage = lazy(() => import('./components/homepage/Homepage'));
const Login = lazy(() => import('./components/login/Login'));
const Sample = lazy(() => import('./components/sample/Sample'));
function App() {
  return (
    <div className="App ">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route element={<ProtectedRoutes></ProtectedRoutes>}>
            <Route path="home" element={<Homepage />}></Route>
            <Route path="sample" element={<Sample />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
