import React from "react";
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return(
            <div className="grid-container">
                <footer className="footer">
                    <div className="kontaktuppgifter">
                        <NavLink to="kontakt">Kontakta oss</NavLink>
                    </div> 
                    <div className="om_oss">
                        <NavLink to="om_oss">Om oss</NavLink>
                    </div>
                    <div className="kopvillkor">
                        <NavLink to="kopvillkor">Köpvillkor</NavLink>
                    </div>
                    <div className="sociala_medier">
                        <NavLink to="sociala_medier">Sociala medier</NavLink>
                    </div>
                    <div className="sitemap">
                        <NavLink to="sitemap">Sitemap</NavLink>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;