import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    fetch("http://localhost:7000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserName(userInfo.userName);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:7000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserName(null);
  };
  return (
    <header>
      <Link to="/" className="logo">
        My logo
      </Link>
      <nav>
        {userName && (
          <>
            <Link to={"/create"}>Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!userName && (
          <>
            <Link to="/login" className="">
              Login
            </Link>
            <Link to="/register" className="">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
