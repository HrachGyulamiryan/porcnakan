import './App.css';
// Katarel Ejic Ej Texapoxutyun;
// Hostic Host => Texapoxumy Katareluc 1in Qayl => Popoxutyun katarel index.js_um;

// Code Terminal => npm install react-router-dom;
// Himnakanum Twyal Gorcoxutyny Katarelu jamank => App.js_um Mnum e Hastatun Elementnner,
// Orinak => Navigation Panel, ew Ayn Componenetnnery Woronq Petk e Amboxj proectum Mshapes Linen,
// Orinak => Footer Componenet;

// Hushum Poxancum Katareluc => <a></a> => tegery Poxarinwum en => <Link></Link>, <NavLink></NavLink>_ein;
// Himnakanum Ogtagorcir <Link></Link>  => Css_um => a {};

// Qni vor Sexmeluc Petk e Gorci Twyal Ejy => Poxancumy Katarel,
// Routes => Object Teg Vory Hawaqum e Bolor Route_nerin;
// Route  => Pahum e Nersum twyal Componentin,
// Vory Chpekt e Gorci Mutqi Hashwin ayl Iren Hasaneli <NavLink> kam <Link>_i wra sexmeluc;

// <Routes>
//    <Route></Route> => Kutakel Nersum Twyal Componentin;
// </Routes>

import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Support from './pagesRandom/Support';
import Service from './pagesRandom/Service';
import Section from './pagesRandom/Section';
import News from './pagesRandom/News';
import Investers from './pagesRandom/Investers';
import Home from './pagesRandom/Home';
import Gallery from './pagesRandom/Gallery';
import Contact from './pagesRandom/Contact';
import Call from './pagesRandom/Call';
import About from './pagesRandom/About';

import Facebook from './pagesRandomTwo/Facebook';
import Instagram from './pagesRandomTwo/Instagram';
import Telegram from './pagesRandomTwo/Telegram'; 
import Twiter from './pagesRandomTwo/Twiter';
import Telephone from './pagesRandomTwo/Telephone';
import TikTok from './pagesRandomTwo/TikTok';
import Youtube from './pagesRandomTwo/Youtube';
import Mail from './pagesRandomTwo/Mail';
import Google from './pagesRandomTwo/Google';
import Viber from './pagesRandomTwo/Viber';


// Nshel   => <Link> kam <NavLink>_erum;
// to=""   <= Poxancum Katarox Gorciq => Nshel Page_i Anunin;
// <Route></Route>_um nshel => path="" => Nshel Page_i Anunin;

// / => Nshanakum e => Sa e 1in Page_n;

function App() {
  return (
    <div className="App">
        <header>
          <nav>
            <NavLink to="/"         >home</NavLink>
            <NavLink to="/support"  >support</NavLink>
            <NavLink to="/service"  >service</NavLink>
            <NavLink to="/section"  >section</NavLink>
            <NavLink to="/news"     >news</NavLink>
            <NavLink to="/investers">investers</NavLink>
            <NavLink to="/gallery"  >gallery</NavLink>
            <NavLink to="/contact"  >contact</NavLink>
            <NavLink to="/call"     >call</NavLink>
            <NavLink to="/about"    >about</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/"         element={<Home      />}></Route>
          <Route path="service"   element={<Service   />}></Route>
          <Route path="section"   element={<Section   />}></Route>
          <Route path="news"      element={<News      />}></Route>
          <Route path="investers" element={<Investers />}></Route>
          <Route path="support"   element={<Support   />}></Route>
          <Route path="gallery"   element={<Gallery   />}></Route>
          <Route path="contact"   element={<Contact   />}></Route>
          <Route path="call"      element={<Call      />}></Route>
          <Route path="about"     element={<About     />}></Route>
        {/* </Routes>

        <Routes> */}
          <Route path='facebook'  element={<Facebook/>}></Route>
          <Route path='instagram' element={<Instagram/>}></Route>
          <Route path='telegram'  element={<Telegram/>}></Route>
          <Route path='twiter'    element={<Twiter/>}></Route>
          <Route path='telephone' element={<Telephone/>}></Route>
          <Route path='tiktok'    element={<TikTok/>}></Route>
          <Route path='youtube'    element={<Youtube/>}></Route>
          <Route path='Mail'    element={<Mail/>}></Route>
          <Route path='google'    element={<Google/>}></Route>
          <Route path='viber'    element={<Viber/>}></Route>

          <Route path='*' element={<h3>ejy chi gtnvel</h3>}></Route>
        </Routes>
        <footer>
            <Link to='/facebook' >Facebook</Link>
            <Link to='/instagram'>Instagram</Link>
            <Link to='/telegram' >Telegram</Link>
            <Link to='/twiter'   >Twiter</Link>
            <Link to='/telephone'>Telephome</Link>
            <Link to='/tiktok'>TikTok</Link>
            <Link to='/youtube'>Youtube</Link>
            <Link to='/mail'>Mail</Link>
            <Link to='/google'>Google</Link>
            <Link to='/viber'>Viber</Link>
        </footer>
    </div>
  );
}

export default App;

// <Routes> => Grel <NavLink> kam <Link>_ic Nerqew;
// <Route></Route> => Uni Attribute => element={} <= Nersum Nshel Twyal Comonenti Anunin;