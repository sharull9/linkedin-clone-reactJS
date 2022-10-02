import { Chat, Send, Share, ThumbUpSharp } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import InputOption from './InputOption';
import "./Post.css";
function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}/>
            <div className="post__info">
                <h2>{name ? name : 'name'}</h2>
                <p>{description ? description : 'description'}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message ? message : 'message'}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpSharp} title="Like" color='gray'/>
            <InputOption Icon={Chat} title='Comment' color='gray'/>
            <InputOption Icon={Share} title='Comment' color='gray'/>
            <InputOption Icon={Send} title='Comment' color='gray'/>
        </div>
    </div>
  )
}

export default Post