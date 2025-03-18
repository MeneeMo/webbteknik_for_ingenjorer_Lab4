import React from "react";
import LikeButton from '../components/LikeButton';


class Home extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <main className="main">
                    <div className="main_info">
                        <h2>Dahlior</h2>
                        <p>Bolldahlior är perfekt att odla om man gillar att göra vackra buketter. Bolldahlior kan man enkelt kombinera med pompondahlior och dekorativa dahlior för att få en bra mix till buketter.<br />
                            Blommornas storlek på bolldahlior blir ca 8-12 cm i diameter.<br />
                            Kom ihåg att ju fler blommor du plockar desto fler kommer det.<br />
                            Vill ni ha odlingstips på dahlior finner ni det här: <a href="http://blomsterdesignnet.blogspot.com/2021/01/odla-dahlior.html">Odla Dahlior</a></p>
                    </div>
                    <div className="main_content">
                        <div className="flex-row">
                            <div className="flex-column">
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/2.jpg" alt="Dahlia 2" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/3.jpg" alt="Dahlia 3" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                            </div>
                            <div className="flex-column">
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/2.jpg" alt="Dahlia 2" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/3.jpg" alt="Dahlia 3" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                            </div>
                            <div className="flex-column">
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/2.jpg" alt="Dahlia 2" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/3.jpg" alt="Dahlia 3" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                            </div>
                            <div className="flex-column">
                                <div><img className="img_product" src="/images/dahlior/1.jpg" alt="Dahlia 1" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/2.jpg" alt="Dahlia 2" style={{width:'100%'}} /><LikeButton /></div>
                                <div><img className="img_product" src="/images/dahlior/3.jpg" alt="Dahlia 3" style={{width:'100%'}} /><LikeButton /></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;