import { message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { matchRoutes, useNavigate } from "react-router-dom";
import { routers } from "./index";

const AuthRoute = ({ children, auth }: any) => {
  const location = window.location;
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken") || "";
  const loginState = useSelector((state: any) => state.public.loginState);
  const matches = matchRoutes(routers, location);
  const isExist = matches?.some((item) => item.pathname === location.pathname);

  useEffect(() => {
    console.log(token, loginState, isExist, auth);
    if (token === "" && auth) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      message.error("token 过期，请重新登录!").then(() => {});
      navigate("/login");
    }
    if (token && isExist && loginState === "login") {
      if (location.pathname === "/" || location.pathname === "/login") {
        navigate("/calendarApp");
      } else {
        navigate(location.pathname);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, location.pathname]);

  return children;
};
export default AuthRoute;