import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

const Header = () => {
  const { setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:7000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:7000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

 const userName = userInfo?.userName


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
