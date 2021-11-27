import React from 'react';
import '../styles/post_style.css'
import '../styles/future_gyor_style.css'

function Post(props) {
  return (
    <a href={props.link}>
    <div className="post future-gyor-img">
        <div className="post-cont">
            <div className="post-title">{props.title}</div>
            <div className="post-text">{props.szoveg}</div>
        </div>
        <div className="post-cont">
            <div><img src={props.kep} alt="testkep" className="post-image"/></div>
        </div>
    </div></a>
  );
}

export default Post;