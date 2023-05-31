import React from "react";
import LoginPage from "../login";
import LayoutPage from "../components/Layout";
import NotFound from "../components/404";
import Captcha from "../captcha";
import CalendarApp from "../calendarApp";
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  auth: boolean;
  children?: RouteConfig[];
  redirect?:string
}
export const routers = [
  { path: "/login", element: <LoginPage />, auth: false },
  {
    path: "/",
    element: <LayoutPage />,
    auth: true,
    children:[
      { path: "/calendarApp", element: <CalendarApp />, auth:true},
      { path: "captcha", element:　<Captcha />, auth:true},
      { path: "*", element: <NotFound />, auth: true },
    ]
  },
];