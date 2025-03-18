import React from "react";

class Kontakt extends React.Component {
    render() {
        return (            
            <div className="grid-container">
                <main className="main">
                    <div className="main_info">
                        <h2>Kontakt</h2>
                        <p>Har ni frågor, vill returnera eller komma i kontakt med Blomsterdesign kan ni maila oss på 
                            <a href="mailto:info@blomsterdesign.net">info@blomsterdesign.net</a>, eller använda er av formuläret i botten
                            på denna sida.<br/><br/>
                            Organisationsnummer: 830725xxx0 <br/>
                            Blomsterdesign i Landskrona <br/> 
                            Höstbruksgatan 16<br/>
                            26160 Landskrona                
                        </p><br/>
                        <div id="nyhetsbrev">
                            <form method="post" action="mailto:r.m.svensson@gmail.com" enctype="text/plain">
                            <fieldset>
                                    <legend>Fyll i formuläret nedan för att komma i kontakt med oss eller för att signa upp för våra 
                                        nyhetsbrev & fina erbjudanden</legend><br />
                                        <label for="name">Namn:</label>
                                        <input type="text" id="name" name="name" placeholder="Namn..." required /><br /><br />
                                        <label for="email">Epost:</label>
                                        <input type="email" id="email" name="email" placeholder="emailadress..." required /><br /><br />
                                        <p>Vill du ta del av vårt nyhetsbrev och få information om erbjudanden och nyheter?</p>
                                        <input type="radio" id="yes" name="answer_newsletter" value="yes" required />
                                        <label for="yes">Ja, tack!</label><br />
                                        <input type="radio" id="no" name="answer_newsletter" value="no" />
                                        <label for="no">Nej, tack!</label><br /><br /><br />
                                        <label for="feedback">Feedback & frågor</label><br />
                                        <textarea id="feedback" name="feedback" rows="6" cols="50" placeholder="Feedback och frågor" ></textarea><br /><br />
                                        <input type="submit" value="Skicka" />
                                        <input type="reset" value="Rensa" /><br /><br />
                                </fieldset><br />
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Kontakt;