import React, {useState} from "react";
import './login.css';

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

  return(
    <div className="Login">
      <header className="Login-header">
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={"username"}>Username:</label>
            <input
              type={"text"}
              id={"username"}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={"password"}>Password:</label>
            <input
              type={"password"}
              id={"password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type={"submit"}>Login</button>
        </form>
      </header>
    </div>
  );
}

export default Login;
