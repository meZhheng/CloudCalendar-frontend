import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider} from "react-router-dom";
import Login from "./login";
import Captcha from "./captcha";

const router = createBrowserRouter(
  createRoutesFromElements(
//    <Route path="/" element={<Login />} >
      <Route path="captcha" element={<Captcha />} />
//    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();