import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { closePop } from "../features/popUpSlice";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import "./Sidebar.css";

function Profile() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    dispatch(closePop());
  };
  return (
    <div className="pop-profile">
      <img src="https://source.unsplash.com/random/?textures-patterns" alt="" />
      <Avatar src="/profile.jpg" className="profile__avatar" />
      <h2 className="profile__name">Arafatulla</h2>
      <h4 className="profile__email">arafat.ulla@adaanmail.in</h4>
      <button onClick={logoutOfApp}>Logout</button>
    </div>
  );
}

export default Profile;
