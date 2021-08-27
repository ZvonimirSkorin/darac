
import Home from './Components/Home.js';
import Kontakt from './Components/Kontakt.js';
import Omeni from './Components/Omeni.js';
import Klijenti from './Components/Klijenti.js';
import Galerija from './Components/Galerija.js';
import Cjenik from './Components/Cjenik.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import './Stylesheethome.css';
import Navigation from "./Components/Navigation.js"
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Switch>

            <Route exact path="/">
             <Home/>
            </Route>

            <Route path="/kontakt">
             <Kontakt/>
            </Route>

            <Route path="/omeni">
             <Omeni/>
            </Route>

            <Route path="/galerija">
             <Galerija/>
            </Route>

            <Route path="/cjenik">
             <Cjenik/>
            </Route>

            <Route path="/klijenti">
             <Klijenti/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
