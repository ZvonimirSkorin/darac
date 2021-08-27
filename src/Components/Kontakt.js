import '.././Stylesheet.css';


function Kontakt(){


    return(
        <body >


    <div className="container">

        <div className="kontakt">

            <div className="lijevo">
                <div className="formwrapper">
                    <div className="title">Prijavi se</div>

                    <div id="form " className="form contact-form">

                        <div className="input_field">
                            <label>Ime i Prezime</label>
                            <input id="name" type="text" className="input" />
                        </div>

                        <div className="input_field">
                            <label>Telefon</label>
                            <input id="tel" type="tel" className="input" />
                        </div>

                        <div className="input_field">
                            <label>Email</label>
                            <input id="email" type="email" className="input" />
                        </div>

                        <div className="input_field">
                            <label>Poruka</label>
                            <textarea id="mess" className="textarea"></textarea>
                        </div>

                        <div className="input_field">

                            <input id="submit" type="submit" className="btn rounded-pill" value="Prijava" />
                        </div>

                    </div>



                </div>
            </div>


            <div className="desno ">

                <div className="info">
                    <h3>Radno vrijeme:</h3>
                    <p><span>Ponedjeljak - Subota:</span> 08:00 - 16:00</p>
                    <p><span>Nedjelja: </span>08:00 - 14:00</p>
                    <p style={{paddingBottom:"30px;"}}><span>Moj broj telefona:</span> 0927583874</p>
                </div>

                <div className="karta">
                    <iframe width="100%" height="350" style={{border:"0;"}} loading="lazy" allowFullScreen="no"
                            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyA0WWT_czu91igtjaykUQ9jjNMwW1E3wwQ&q=gyms4you+zagreb"></iframe>
                </div>
            </div>
        </div>



    </div>




    <div className="bjelo"></div>

    <footer>

        <div className="container">
            <div className="footer">
                <a href="#top"><img src="img/c4y.png" />Strength & Conditioning</a>
            </div>
        </div>

    </footer>

    


</body>
    );
}


export default Kontakt;