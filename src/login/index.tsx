import React, {useEffect, useState} from "react";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import {useGetCaptchaQuery, useLoginMutation} from "../store/loginApi";
import {setLogin, setUserInfo} from "../store/reducer/publicSlice";
import {useDispatch} from "react-redux";
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('test')
  const [password, setPassword] = useState('test')
  const [captcha, setCaptcha] = useState('')
  const [remember, setRemember] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    // 数据
    data: captchaImg,
    // 刷新方法
    refetch: refetchCaptcha,
    // 判断是否出错
    isError,
  } = useGetCaptchaQuery(null, {});

  // const [fetchLogin, {isLoading}] = useLoginMutation();
  const [fetchLogin] = useLoginMutation();

  useEffect(() => {
    if (isError) {
      message.error("后端接口连接异常！").then(() => {
      });
    }
  }, [isError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
      captcha: captcha,
      remember: remember
    }
    try {
      const res: any = await fetchLogin(formData).unwrap();
      if (res?.code === 200) {
        message.success(res?.message);
        const token = res?.token;
        localStorage.setItem("userToken", token);
        dispatch(setLogin("login"));
        dispatch(setUserInfo(res?.user));
        navigate("/calendarApp");
      } else {
        message.error(res?.message);
        // 重新刷新验证码
        setTimeout(() => {
          refetchCaptcha();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRefreshCatch = () => {
    refetchCaptcha();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto"
             src="/image/calendar.png?bg-cover color=indigo&shade=600"
             alt="CloudCalender"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Account
            </label>
            <div className="mt-2">
              <input
                type={"text"}
                id={"username"}
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete='off'
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 font-mono"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type={"password"}
                id={"password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete={"off"}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 font-mono"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Captcha
              </label>
            </div>
            <div className="mt-2">
              <input
                type={"text" }
                maxLength={4}
                value={captcha}
                onChange={e => setCaptcha(e.target.value.replace(/[^a-zA-Z]/g, ''))}
                autoComplete={"off"}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 font-mono"
              />
            </div>
            <img
              src={captchaImg?.captcha_img}
              style={{width: "200px", height: "40"}}
              alt="验证图片"
              onClick={onRefreshCatch}
            />
          </div>
          <div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register an account.
              </a>
            </p>
          </div>
          <div>
            <button type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>

)
  ;
};

export default LoginPage;