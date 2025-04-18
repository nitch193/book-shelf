const Login = () => {
  return (
    <div className="form-Container">
      <div className="signup-classic">
        <h3>Login</h3>
        <form className="form">
          <fieldset className="username">
            <input type="text" placeholder="username" />
          </fieldset>
          <fieldset className="password">
            <input type="password" placeholder="password" />
          </fieldset>
          <button type="submit" className="btn">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
