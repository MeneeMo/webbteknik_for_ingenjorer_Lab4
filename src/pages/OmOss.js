import React from "react";

class OmOss extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <main className="main">
                    <div className="main_info">
                        <h2>Om oss</h2>
                        <p>Vi är ett litet familjeägt företag beläget i västra Skåne som öppnade upp portarna 2025. <br />
                        Vi brinner för inredning, både ute och inne. Hos oss hittar ni omsorgsfullt utvalda produkter från lokala producenter.<br /><br />
                        Här följer en tabell för att uppfylla uppgiftskravet "Minst en tabell"!</p> <br /><br />
                        <table>
                            <tr>
                                <th>VD</th>
                                <th>Vice VD</th>
                                <th>Sekreterare</th>
                            </tr>
                            <tr>
                                <td>Jane Doe</td>
                                <td>Jane Does make</td>
                                <td>Jane Does väninna</td>
                            </tr>
                            <tr>
                                <td><img src="/images/vd.jpg" alt="VD" style={{ width: "100px", height: "100px" }} /></td>
                                <td><img src="/images/vicevd.jpg" alt="Vice VD" style={{ width: "100px", height: "100px" }} /></td>
                                <td><img src="/images/sekreterare.jpeg" alt="Sekreterare" style={{ width: "100px", height: "100px" }} /></td>
                            </tr>
                        </table>
                    </div>
                </main>
            </div>
        );
    }
}

export default OmOss;