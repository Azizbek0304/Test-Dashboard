import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const user = props.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      props.login(user);
    } else {
      setError("Invalid email or password");
    }
  };

  if (props.user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display error message */}
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user
});

export default connect(mapStateToProps, { login })(Login);
