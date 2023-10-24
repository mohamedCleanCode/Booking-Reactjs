import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking</span>
        {user ? (
          user.details.username
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={() => navigate("/register")}>
              Register
            </button>
            <button className="navButton" onClick={() => navigate("login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
