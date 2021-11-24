import React from 'react';
import Post from './posts/Post'
import '../styles/style.css'
import '../styles/post_style.css'
import '../styles/future_gyor_style.css'
import gyorlogo from '../images/CzuczorLogo.png'
import kep from '../images/testkep.jpg'

function Home(props) {
  return (
    <div style={{textAlign:"center"}}>
      <div><img src={gyorlogo} alt="testkep" className={props.toggle ? "" : "future-gyor-img small"}/></div>
      <div className="cím">Posts</div>
      <div className="postok">
        {props.post.map((post)=>(
          <Post key={post.title.toString()} title={post.title} szoveg={post.szoveg}/>))}
      </div>

      <div className="cím">Győr 2121</div>
      <div><img src={kep} alt="testkep" className="future-gyor-img"/></div>
      <div><img src={kep} alt="testkep" className="future-gyor-img"/></div>
    </div>
  );
}

export default Home;