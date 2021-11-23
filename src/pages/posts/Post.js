import React from 'react';
import kep from '../../images/testkep.jpg'
import '../../styles/post_style.css'

function Post(props) {
  return (
    <div className="post">
        <div className="post-cont">
            <div className="post-title">{props.title}</div>
            <div className="post-text">{props.szoveg}</div>
        </div>
        <div className="post-cont">
            <div className="post-image"><img src={kep} alt="testkep" style={{width:"300px"}}/></div>
        </div>


    </div>
  );
}

export default Post;