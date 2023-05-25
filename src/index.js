import {StrictMode} from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./login";
import Captcha from "./captcha";

import './index.css';
import {AppProvider} from "./AppContext";
import Calendar from "./calendar";
import CalendarApp from "./calendarApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children:[
      {path:　"captcha", element:　<Captcha />}
    ]
  },
  {path: "/calendar", element: <Calendar />},
  {path: "/calendarApp", element: <CalendarApp />},
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  </StrictMode>
);

reportWebVitals();