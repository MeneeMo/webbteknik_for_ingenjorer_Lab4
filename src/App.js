// 2025-03-18
// Author: Marlene Svensson
// Transfor HTML page to React

import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import Kopvillkor from "./pages/Kopvillkor";
import OmOss from "./pages/OmOss";
import Sitemap from "./pages/Sitemap";
import SocialaMedier from "./pages/SocialaMedier";

import Dahlior from "./shop/Dahlior";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import './App.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div>
        <Header />
        <div className="top_container"> 
          <Nav />
          <Aside />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="om_oss" element={<OmOss />} />
          <Route path="kopvillkor" element={<Kopvillkor />} />
          <Route path="sociala_medier" element={<SocialaMedier />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="dahlior" element={<Dahlior />} />
        </Routes>
        <Footer />
      </div>
  );
}


export default App;