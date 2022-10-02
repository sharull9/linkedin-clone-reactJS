import React, { useEffect } from "react";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { login, logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { selectPopup } from "../features/popUpSlice";
import PopupProfile from "../Components/PopupProfile";

function Home() {
  const user = useSelector(selectUser);
  const popup = useSelector(selectPopup);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* right sidebar */}
      </div>
      {!user ? (
        <div className="to-login">
          <button>
            <Link to="/login"> Log In </Link>
          </button>
          <button>
            <Link to="/signup"> Signup </Link>
          </button>
        </div>
      ) : (
        ""
      )}
      {popup && <PopupProfile />}
    </div>
  );
}

export default Home;
