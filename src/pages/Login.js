import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
    navigate("/");
  };
  return (
    <div className="login">
      <div className="login__logo">
        <p>Linked</p>
        <img src="/linkedin.svg" alt="" />
      </div>
      <form action="/">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Log In
        </button>
      </form>
      <div className="login__navigation">
        <p>
          Not a member ?&nbsp;
          <Link to="/signup">Register Now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
