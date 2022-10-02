import "./Feed.css";
import React, { useEffect, useState } from "react";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Send,
  Subscriptions,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please Login to Access Post");
    } else {
      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Write a post"
            />
            <button onClick={sendPost} type="submit">
              <Send />
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map(
        ({ id, data: { name, description, message, photoUrl, timeStamp } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        )
      )}
    </div>
  );
}

export default Feed;
