import {StrictMode} from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./login";
import Captcha from "./captcha";

const router = createBrowserRouter([
  {path: "/", element: <Login />},
  {path: "/captcha", element: <Captcha />}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

reportWebVitals();