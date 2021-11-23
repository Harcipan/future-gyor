import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/style.css'
import './styles/navbar.css'
import './styles/footer_style.css'
import Home from './pages/Home'
import CGBGL from './images/CzuczorLogo.png'

function App() {
  const [toggle,setToggle]=useState(false);
  const toggler = ()=>{toggle?setToggle(false):setToggle(true);}
  return (
    <Router>
      {/*navbar*/}
      <div className="navbar-cont">
        <div className="navbar-item n-i-s fdr">
            <a className="nav-link" href="/"><img src={CGBGL} alt="CGBG Logo" style={{width:"50px"}}/></a>
        </div>
        <div className="navbar-item n-i-e fdr">
          <a className="nav-link" href="/about">Nyelvek</a>
        </div>
      </div>
      <div className="navbar-cont-mobile">
        <div className="navbar-item n-i-s fdr">
            <a className="nav-link" href="https://playforwin.hu">PfW</a>
        </div>
        <div onClick={toggler} className="navbar-item n-i-e fdr">
            <div className="line-container">
                <div className={toggle ? "line line-1-off" : "line line-1-on"}></div>
                <div className={toggle ? "line line-2-off" : "line line-2-on"}></div>
                <div className={toggle ? "line line-3-off" : "line line-3-on"}></div>
            </div>
        </div>
      </div>
      <div className={toggle ? "navbar-cont-mobile-list nav-off fdc" : "navbar-cont-mobile-list nav-on fdc"}>
        <div className="navbar-item" >
            <a className="nav-link" href="/">Magyar</a>
        </div>
        <div className="navbar-item" >
            <a className="nav-link" href="/english">English</a>
        </div>
        <div className="navbar-item" >
            <a className="nav-link" href="/german">Deutsch</a>
        </div>
        <div className="navbar-item" >
            <a className="nav-link" href="/french">Français</a>
        </div>
        <div className="navbar-item" >
            <a className="nav-link" href="/latin">Latinus</a>
        </div>
        <div className="navbar-item" >
            <p>English</p>
        </div>
      </div>
      {/*content*/}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      {/*footer*/}
      <div className="footer-cont">
        <div className="footer-item">
            <div className="foot-item-text cursorD" style={{fontSize:"50px"}}><img src={CGBGL} alt="CGBG Logo" style={{width:"100px"}}/></div>
        </div>
        <div className="footer-item copyszoveg"><div className="foot-item-tit" style={{fontSize:"20px"}}>Czuczor Gergely Bencés Gimnázium és Kollégium</div></div>
      </div>
    </Router>
  );
}

export default App;
