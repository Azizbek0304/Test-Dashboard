import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const logoLink =
  "https://s3-alpha-sig.figma.com/img/7f1b/c404/1d443c65fb47bba0a94a57f16e47753e?Expires=1694995200&Signature=D8bPcphzEzi4vDt8b3P31UHraUumBnGkR86A9v2pTnHF-R1XP8wLuu10WT64L7OJB2sG0yQ0x0SVyBXrjU9Wcvv2F-cNqXj9uhuxmf2rdwQnKyeKXnMVMe9qifzEUeDTLmfVR9N2gcW0w9ZmtSAigxWPMwR3tfTytvUjwQTB2W9-2pqKolNvJCOnw0QSVq~sLP1Kks6OPkdd8Z6G~FLIIzeJVffrRwllVt360hNS10lZaSWlNe6chREkryP4PHVeaBkd5-zsrhpCGlqMShJ1QRhWsPOb2Xw4am7lgVIeipItyvLEnfFkZ2l-0mbRTgJe3yvhUZNmP9~SjNYzNaR3cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(registerUser(formData));

    navigate("/dashboard");
  };

  return (
    <div className="signup-container container">
      <div className="left">
        <img src={logoLink} alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie
          lacus. Faucibus arcu aliquam nullam nunc dictumst.{" "}
        </p>
      </div>
      <div className="right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
