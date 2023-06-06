import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        My logo
      </Link>
      <nav>
        <Link to="/login" className="">
          Login
        </Link>
        <Link to="/register" className="">
          Register
        </Link>
      </nav>
    </header>
  );
};
export default Header;
