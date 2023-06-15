import {useNavigate} from "react-router-dom";
import {useLogoutMutation} from "../store/loginApi";
import {message} from "antd";
import {setLogin, setUserInfo} from "../store/reducer/publicSlice";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fetchLogout] = useLogoutMutation();
  const username = useSelector((state:any) => state.public.userInfo);
  const token = localStorage.getItem("userToken") || "";

  useEffect(() => {
    (async() =>{
      try {
        const res: any = await fetchLogout({username: username, token: token}).unwrap();
        if (res?.code === 200 || res?.code === 401) {
          if (res?.code === 200)
            message.success(res?.message);
          else message.error(res?.message);
          localStorage.removeItem("userToken");
          dispatch(setLogin("logout"));
          dispatch(setUserInfo(null));
          navigate('/login');
        } else {
          message.error(res?.message);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null;
}
export default LogoutPage;