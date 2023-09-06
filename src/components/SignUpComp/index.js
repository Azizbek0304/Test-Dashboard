import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const newUser = { email, password };
    props.signup(newUser);
  };

  if (props.user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Signup</h2>
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
          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { signup })(Signup);
