import { useState } from "react";

const Registerpage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev) => {
    ev.preventDefault();

    const response = await fetch("http://localhost:7000/register", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });
  if (response.status === 200){
    alert('Registration successful')
  }else{
    alert('Registration failed')
  }
  };

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  );
};
export default Registerpage;
