export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user
});

export const logout = () => ({
  type: LOGOUT
});

export const loginUser = (formData) => (dispatch, getState) => {
  const { users } = getState().auth;
  const { username, password } = formData;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    dispatch(loginSuccess(user));
    return true;
  } else {
    return false;
  }
};

export const registerUser = (formData) => (dispatch) => {
  const user = {
    id: Date.now(),
    username: formData.username,
    password: formData.password,
    role: "user"
  };
  dispatch(registerSuccess(user));
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
