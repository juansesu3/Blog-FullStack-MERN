import { useState } from "react";
import {Navigate} from 'react-router-dom';

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:7000/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }else{
      alert('worng credentials')
    }
  };

  if(redirect){
    return <Navigate to={'/'}/>

  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(ev) => setUserName(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
};
export default LoginPage;
