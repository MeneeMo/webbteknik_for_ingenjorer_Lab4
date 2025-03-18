import React from "react";
import LikeButton from '../components/LikeButton';

class Home extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <main className="main">
                    <div className="main_info">
                        <LikeButton />
                        <h2>Välkommen till Blomsterdesign</h2>
                        <p>Här hittar du allt inom inredning och design, både ute och inne.</p>
                    </div>
                    <div className="main_content">
                        <div className="main_flex-row">
                            <div className="main_flex-column">
                                <div><img className="main_product" src="/images/main/1.jpg" alt="Trädgårdsdekorationer" style={{width:'100%'}} /></div>
                                <div><img className="main_product" src="/images/main/2.jpg" alt="Ljusstakar" style={{width:'100%'}} /></div>
                            </div>
                            <div className="main_flex-column">
                                <div><img className="main_product" src="/images/main/3.jpg" alt="Krukor" style={{width:'100%'}} /></div>
                                <div><img className="main_product" src="/images/main/4.jpg" alt="Smycken" style={{width:'100%'}} /></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;