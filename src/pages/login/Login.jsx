import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../base-url/baseUrl";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await baseUrl.post("/api/auth/login", inputs);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <main className="login_page">
      <form className="l_form">
        <input
          className="l_input"
          type="text"
          placeholder="username"
          id="username"
          required
          onChange={handleChange}
        />
        <input
          className="l_input"
          type="password"
          placeholder="password"
          id="password"
          required
          onChange={handleChange}
        />
        <button className="l_button" disabled={loading} onClick={handleClick}>
          Login
        </button>
        {error && error.message}
      </form>
    </main>
  );
};

export default Login;
