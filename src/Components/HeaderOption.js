import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick, onDoubleClick }) {
  const user = useSelector(selectUser);
  return (
    <div
      className="headerOption"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
