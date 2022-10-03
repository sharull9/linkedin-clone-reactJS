import { Chat, Send, Share, ThumbUpSharp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import InputOption from "./InputOption";
import "./Post.css";


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}> {user?.displayName[0]} </Avatar>
        <div className="post__info">
          <h2>{name ? name : "name"}</h2>
          <p>{description ? description : "description"}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message ? message : "message"}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpSharp} title="Like" color="gray" />
        <InputOption Icon={Chat} title="Comment" color="gray" />
        <InputOption Icon={Share} title="Comment" color="gray" />
        <InputOption Icon={Send} title="Comment" color="gray" />
      </div>
    </div>
  );
})

export default Post;
