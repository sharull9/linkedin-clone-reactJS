import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = ( heading, subtitle ) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle("News Title", "News Description")}
      {newsArticle("News Title", "News Description")}
      {newsArticle("News Title", "News Description")}
      {newsArticle("News Title", "News Description")}
      {newsArticle("News Title", "News Description")}
      {newsArticle("News Title", "News Description")}
    </div>
  );
}

export default Widgets;
