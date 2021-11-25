import React from 'react';
import Post from './Post'
import '../styles/style.css'
import '../styles/post_style.css'
import '../styles/future_gyor_style.css'
import gyorlogo from '../images/CzuczorLogo.png'
import testkep from '../images/testkep.jpg'

function Home(props) {
  return (
    <div style={{textAlign:"center"}}>
      <div><img src={gyorlogo} alt="Future Győr Logo" className={props.toggle ? "" : "future-gyor-img small"}/></div>
      <div className="cím">Posts</div>
      <div className="postok">
        {props.post.map((post)=>(
          <Post key={post.title.toString()} title={post.title} szoveg={post.szoveg} kep={post.kep}/>))}
      </div>

      <div className="cím">Győr 2121</div>
      <div><img src={testkep} alt="testkep" className="future-gyor-img"/></div>
      <div><img src={testkep} alt="testkep" className="future-gyor-img"/></div>
    </div>
  );
}

export default Home;