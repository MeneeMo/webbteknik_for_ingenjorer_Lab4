import React from "react";

class Aside extends React.Component {
    render() {
        return(
                <aside className="aside">
                    <div className="search">
                        <p>Sökfält</p>
                    </div>

                    <div className="login">
                        <p>Inloggning</p>                
                    </div>

                    <div className="cart">
                        <p>Kundkorgen</p>                
                    </div>
                </aside>
        )
    }
}

export default Aside;