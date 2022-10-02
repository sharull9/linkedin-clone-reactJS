import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { openPop, closePop } from "../features/popUpSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const open = () => {
    dispatch(openPop());
  };
  const close = () => {
    dispatch(closePop());
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin.svg" alt="" />
        <div className="header__search">
          <Search />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />

        {!user ? (
          <HeaderOption avatar title="NAME" onClick={close} />
        ) : (
          <HeaderOption
            avatar
            title={user?.displayName}
            onClick={open}
            onDoubleClick={close}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
