import React from "react";
import LikeButton from '../components/LikeButton';

class SocialaMedier extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <main className="main">
                    <div className="main_info">
                        <LikeButton />
                        <h2>Sociala Medier</h2>
                        <p>Följ oss gärna på våra sociala medier!</p>
                        <p><a href="https://www.instagram.com/blomsterdesign_net/"><img src="/images/insta.jpeg" alt="Instagram" style={{ width: "42px", height: "42px" }} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100063506983090#"><img src="/images/fb.jpeg" alt="Facebook" style={{ width: "42px", height: "42px" }} /></a>
                        <a href="https://www.youtube.com/watch?v=w0GfewGYR3g&list=RDMMw0GfewGYR3g&start_radio=1"><img src="/images/YT.jpeg" alt="YouTube" style={{ width: "42px", height: "42px" }} /></a></p><br />
                    </div>
                    <div className="main_content">  
                        <h3>Ljud & Video</h3>
                        <p>Här följer en video som uppfyller uppgiftskravet "Minst en video och/eller en ljudfil som ska kunna startas, stoppas och pausas"</p>
                        <audio controls>
                            <source src="summer-breeze-meditation-8606.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                        </audio><br />
                        <LikeButton /><br /><br />
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/w0GfewGYR3g?si=IN1zf-evw__HLRw-" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </main>
            </div>
        );
    }
}

export default SocialaMedier;