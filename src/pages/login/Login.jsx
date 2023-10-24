import "./login.css";

const Login = () => {
  return (
    <main className="login_page">
      <form className="l_form">
        <input
          className="l_input"
          type="text"
          placeholder="username"
          id="username"
          required
        />
        <input
          className="l_input"
          type="password"
          placeholder="password"
          id="password"
          required
        />
        <button className="l_button">Login</button>
      </form>
    </main>
  );
};

export default Login;
