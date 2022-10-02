import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login, logout } from "../features/userSlice";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter Name to Continue");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
    navigate("/");
  };
  return (
    <div className="signup">
      <div className="signup__logo">
        <p>Linked</p>
        <img src="/linkedin.svg" alt="" />
      </div>
      <form action="/">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </form>
      <div className="signup__navigation">
        <p>
          Already a member ?&nbsp;
          <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
