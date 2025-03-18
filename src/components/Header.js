import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <div className="grid-container">
                <header className="header">
                    <div className="viktig_info">
                        <p className="info_frakt">Fri frakt på beställningar över 69kr</p>
                        <p className="info_leverans">1-3 dagars leveranstid</p>
                        <p className="info_betalning">Betala med Klarna</p>
                    </div>
                    <div className="logga">                    
                        <NavLink to="/"><img src="/images/logga.png" alt="Olivgren logga" id="logga" /></NavLink>
                    </div>
                    <div className="intro">
                        <p>Blomsterdesign - en webshop med dekorationer för både hem och trädgård.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;