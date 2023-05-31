import React, {useState} from "react";
import './.css';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      'username': username,
      'password': password
    };

    try {
      // 发送登录请求到后端
      const response = await fetch('https://localhost:8000/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // 处理后端的响应
      const responseData = await response.json();
      console.log(responseData)

      // 根据后端的响应进行逻辑处理，例如显示错误消息或进行页面跳转等
      if (responseData.success) {
        // 登录成功，进行页面跳转或其他逻辑
        console.log('登录成功');
      } else {
        // 登录失败，显示错误消息或其他处理
        console.log('登录失败:', responseData.message);
      }
    } catch (error) {
      console.error('登录请求出错:', error);
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="image/calender.png?bg-cover color=indigo&shade=600"
            alt="CloudCalender"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
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
                  autoComplete='off'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 font-mono"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Let's Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  )

}

export default Login;
