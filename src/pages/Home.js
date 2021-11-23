import React from 'react';
import Post from './posts/Post'
import '../styles/style.css'
import '../styles/post_style.css'
import '../styles/future_gyor_style.css'
import gyorlogo from '../images/CzuczorLogo.png'
import kep from '../images/testkep.jpg'

function Home() {
  const post = [{title:"PR Cikk", szoveg:"valami valami valami"},{title:"Cím", szoveg:"szoveg, szovegeeee"},];
  return (
    <div style={{textAlign:"center"}}>
      <div><img src={gyorlogo} alt="testkep" style={{width:"500px"}}/></div>
      <h1>Posts</h1>
      <div className="postok">
        {post.map((post)=>(
          <Post title={post.title} szoveg={post.szoveg}/>))}
      </div>

      <h1>Győr 2121</h1>
      <div><img src={kep} alt="testkep" className="future-gyor-img"/></div>
      <div><img src={kep} alt="testkep" className="future-gyor-img"/></div>
    </div>
  );
}

export default Home;