import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/style.css'
import './styles/navbar.css'
import './styles/footer_style.css'
import Home from './pages/Home'
import CGBGL from './images/CzuczorLogo.png'
import testkep from './images/CzuczorLogoOG.png'

function App() {
  const [toggle,setToggle]=useState(false);
  const toggler = ()=>{toggle?setToggle(false):setToggle(true);}
  const [sz1, setSz1]=useState("Ez van a pr cikkben, nagyon szép és okos")
  const [sz2, setSz2]=useState("Ez egy másik szöveg")
  const [tt1, setTt1]=useState("PR Cikk")
  const [tt2, setTt2]=useState("Egy másik feladat")

  function changeLang(n){
    if (n===1){
      setSz1("Ez van a pr cikkben, nagyon szép és okos");
      setSz2("Ez egy másik szöveg");
      setTt1("PR Cikk");
      setTt2("Egy másik feladat");
    }
    else if(n===2) {
      setSz1('This is the pr article, very nice and smart');
      setSz2('This is another text');
      setTt1('Article PR');
      setTt2('masik valami legyszi mukodj');
    }
    else if(n===3) {
      setSz1('Das ist der PR-Artikel, sehr schön und schlau');
      setSz2('Das ist ein anderer Text');
      setTt1('Artikel PR');
      setTt2('Eine andere Aufgabe');
    }
    else if(n===4) {
      setSz1('Ceci est l\'article de relations publiques, très gentil et intelligent');
      setSz2('Ceci est un autre texte');
      setTt1('Article PR');
      setTt2('Une autre tâche');
    }
    else if(n===5) {
      setSz1('Hic est PR articulus, valde delicatus et dolor');
      setSz2('Hic est alius textus');
      setTt1('Articulus PR');
      setTt2('Alius negotium');
    }
  }
  const post = [{title:tt1, szoveg:sz1, kep:testkep},{title:tt2, szoveg:sz2, kep:CGBGL},];
  return (
    <Router>
      {/*navbar*/}
      <div className="navbar-cont">
        <div className="navbar-item n-i-s fdr">
            <a className="nav-link" href="/"><img src={CGBGL} alt="CGBG Logo" style={{width:"50px"}}/></a>
        </div>
        <div className="navbar-item n-i-e fdr">
          <div className="nav-link">
            <div onClick={toggler} className="navbar-item n-i-e fdr" style={{cursor:"pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{padding:"5px"}} viewBox="0 0 24 24"><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"/></svg>
              <div className="line-container">
                  <div className={toggle ? "line line-1-off" : "line line-1-on"}></div>
                  <div className={toggle ? "line line-2-off" : "line line-2-on"}></div>
                  <div className={toggle ? "line line-3-off" : "line line-3-on"}></div>
              </div>
          </div>
        </div>
        </div>
      </div>
      <div className="navbar-cont-mobile">
        <div className="navbar-item n-i-s fdr">
            <a className="nav-link" href="https://playforwin.hu"><img src={CGBGL} alt="CGBG Logo" style={{width:"50px"}}/></a>
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
            <div className="nav-link"onClick={()=>changeLang(1)}>Magyar</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(2)}>English</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(3)}>Deutsch</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(4)}>Français</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(5)}>Latinus</div>
        </div>
      </div>
      {/*content*/}
      <Routes>
        <Route exact path="/" element={<Home toggle={toggle} post={post}/>}></Route>
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