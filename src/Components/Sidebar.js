import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="profile">
          <img
            src="https://source.unsplash.com/random/?textures-patterns"
            alt=""
          />
          <Avatar src={user?.photoUrl} className="profile__avatar">
            {user?.displayName[0]}
          </Avatar>
          <h2 className="profile__name">{user?.displayName}</h2>
          <h4 className="profile__email">{user?.email}</h4>
        </div>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed You</p>
          <p className="sidebar__statNumber">2,531</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">5,301</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("nextJS")}
        {recentItem("reactJS")}
        {recentItem("nextJS")}
        {recentItem("reactJS")}
        {recentItem("nextJS")}
        {recentItem("reactJS")}
        {recentItem("nextJS")}
        {recentItem("reactJS")}
        {recentItem("nextJS")}
        {recentItem("reactJS")}
      </div>
    </div>
  );
}

export default Sidebar;
