import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/aouthActions";

const Protected = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Protected Route</h2>
      {authenticated ? (
        <div>
          <p>Welcome to the protected route!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not authenticated. Please log in.</p>
      )}
    </div>
  );
};

export default Protected;
