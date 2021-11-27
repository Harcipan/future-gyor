import React from 'react';
import '../styles/post_style.css'
import '../styles/future_gyor_style.css'
import img29 from "../images/latvanoyssagok/image29.jpg"

function Prcikk(props) {
  return (
    <>
    <div className="future-gyor-cont" style={{minHeight:"1000px"}}>
      <div className="future-gyor-item">
      <div className="future-gyor-title">{props.prcikk[0].title}</div>
      <div className="future-gyor-text">{props.prcikk[0].text}</div>
      <div className="prcikk" style={{textAlign:"center",}}><img className="prcikk-img" style={{borderRadius:"20px"}}src={img29} alt="future-gyor" /></div>
      </div>
    </div>
    </>
  );
}

export default Prcikk;