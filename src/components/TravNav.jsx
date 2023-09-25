import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function TravNav() {
    return (
        <div>
      <Navbar className='navbar'  expand="lg" >
        <Container>
          {/* <Navbar.Brand href='/'>
            <div className='nav-logo-container'>
            <img href='/' id='nav-logo' src={logo} alt='Duck Logo'/>
            </div>
          </Navbar.Brand> */}
          <Navbar.Toggle className='text-light' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='text-white' id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='text-light nav-text' href="/kiara">Kiara</Nav.Link>
              <Nav.Link className='text-light nav-text' href="/">Trav</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )

}