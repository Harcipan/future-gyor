import React from 'react';
import Post from './Post'
import '../styles/style.css'
import '../styles/post_style.css'
import '../styles/future_gyor_style.css'
import gyorlogo from '../images/CzuczorLogo.png'
import kbolt1 from '../images/kimeros_bolt1.jpg'
import kbolt2 from '../images/kimeros_bolt2.jpeg'
import kbolt3 from '../images/kimeros_bolt3.jpg'
import maru from '../images/magyar_aru.png'
import maru1 from '../images/magyar_aru1.jpg'
import maru2 from '../images/magyar_aru2.jpg'
import fgy1 from '../images/image1.jpg'
import fgy2 from '../images/image2.jpg'
import fgy3 from '../images/image3.jpg'
import fgy4 from '../images/image4.jpg'
import fgy5 from '../images/image5.jpg'

function Home(props) {
  return (
    <div style={{textAlign:"center"}}>
      <div><img src={gyorlogo} alt="Future Győr Logo" className={props.toggle ? "" : "future-gyor-img small"}/></div>
      <div className="cím"></div>
      <div className="postok">
        {props.post.map((post)=>(
          <Post key={post.title.toString()} title={post.title} szoveg={post.szoveg} kep={post.kep} link={post.link}/>))}
      </div>

      <div className="cím">Győr 2121</div>
      <div className="future-gyor-cont">
        <div className="future-gyor-item">
          <div className="future-gyor-title">{props.FGY[0].title}</div>
          <div className="future-gyor-text">{props.FGY[0].szoveg}</div>
        </div>
        <div><img src={maru1} alt="future-gyor-kep" className="future-gyor-img"/></div>
      </div>
      <div><img src={maru} style={{maxWidth:"300px"}} alt="future-gyor-kep" className="future-gyor-img"/>
      <img src={maru2} alt="future-gyor-kep" className="future-gyor-img"/></div>
      <div className="future-gyor-cont">
        <div className="future-gyor-item">
          <div className="future-gyor-title">{props.FGY[1].title}</div>          
          <div className="future-gyor-text">{props.FGY[1].szoveg}</div>
        </div>
      </div>
      <div><img src={kbolt1} alt="future-gyor-kep" className="future-gyor-img"/>
      <img src={fgy2} alt="future-gyor-kep" className="future-gyor-img"/></div>
      <div><img src={kbolt2} alt="future-gyor-kep" className="future-gyor-img"/>
      <img src={kbolt3} alt="future-gyor-kep" className="future-gyor-img"/></div>
      <div className="future-gyor-cont">
        <div className="future-gyor-item">
          <div className="future-gyor-title">{props.FGY[2].title}</div>          
          <div className="future-gyor-text">{props.FGY[2].szoveg}</div>
        </div>
        <div><img src={fgy4} alt="future-gyor-kep" className="future-gyor-img"/></div>
      </div>
      <div><img src={fgy3} alt="future-gyor-kep" className="future-gyor-img"/>
      <img src={fgy5} alt="future-gyor-kep" className="future-gyor-img"/></div>
      <div className="future-gyor-cont">
        <div className="future-gyor-item">
          <div className="future-gyor-title">{props.FGY[3].title}</div>          
          <div className="future-gyor-text">{props.FGY[3].szoveg}</div>
        </div>
        <div><img src={fgy1} style={{maxHeight:"1250px"}} alt="future-gyor-kep" className="future-gyor-img"/></div>
      </div>
    </div>
  );
}

export default Home;