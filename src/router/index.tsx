import React from "react";
import LoginPage from "../login";
import LayoutPage from "../components/Layout";
import NotFound from "../components/404";
import RegisterPage from "../register";
import LogoutPage from "../login/logout";
import UserProfile from "../user/userProfile";
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
  { path: "/logout", element: <LogoutPage />, auth: true },
  { path: "/register", element: <RegisterPage />, auth: false },
  {
    path: "/",
    element: <LayoutPage />,
    auth: false,
    children:[
      { path: "calendarApp", element: <CalendarApp />, auth: false },
      { path: "profile", element: <UserProfile />, auth: false },
      { path: "*", element: <NotFound />, auth: true },
    ]
  },
];