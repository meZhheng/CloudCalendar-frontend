import React from "react";
import LoginPage from "../login";
import LayoutPage from "../components/Layout";
import NotFound from "../components/404";
import CalendarApp from "../calendarApp";
import RegisterPage from "../register";
import LogoutPage from "../login/logout";
import UserProfile from "../user/userProfile";

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
    auth: true,
    children:[
      { path: "calendarApp", element: <CalendarApp />, auth: true },
      { path: "profile", element: <UserProfile />, auth: true },
      { path: "*", element: <NotFound />, auth: false },
    ]
  },
];