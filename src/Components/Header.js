import React, { useState } from "react";
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
  const [count, setCount] = useState(0);

  const check = () => {
    setCount(count + 1);
    if (count % 2 !== 0) {
      dispatch(openPop());
    } else {
      dispatch(closePop());
    }
  };
  const open = () => {};
  const close = () => {};
  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin-white.svg" alt="" />
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
          <HeaderOption avatar loc />
        ) : (
          <HeaderOption avatar title={user?.displayName} onClick={check} />
        )}
      </div>
    </div>
  );
}

export default Header;
