import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import  '.././Stylesheethome.css';
import {Link} from 'react-router-dom';

function Navigation() {
    return(
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand><Link to="/" className="logo" href="index.html"><img src="https://firebasestorage.googleapis.com/v0/b/strengthandconditioning.appspot.com/o/Darac%2Fc4y.png?alt=media&token=4987d8a1-9448-46bd-abd2-a095864abe72" />
  Strength & Conditioning</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="nav">
      <Nav.Link ><Link className="plavo" id="link" to="/">POČETNA</Link></Nav.Link>
      <Nav.Link ><Link id="link"to="/kontakt">KONTAKT</Link></Nav.Link>
      <Nav.Link ><Link id="link"to="/cjenik">CJENIK</Link></Nav.Link>
      <Nav.Link ><Link id="link"to="/klijenti">KLIJENTI</Link></Nav.Link>
      <Nav.Link ><Link id="link"to="/omeni">O MENI</Link></Nav.Link>
      <Nav.Link  eventKey={2}>
        <Link id="link"to="/galerija">GALERIJA</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default Navigation;