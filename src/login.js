import React, {useState} from "react";
import './login.css';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      username: username,
      password: password
    };
    console.log(data)

    try {
      // 发送登录请求到后端
      const response = await fetch('http://localhost:8000/login.php', {
        method: 'POST',
        headers: {
          'Cookie': document.cookie,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log('登录成功');
      } else {
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
