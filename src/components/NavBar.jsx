import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/netflix_logo.png';
import avatar from '../assets/avatar.png'
import { NavDropdown } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Bell } from 'react-bootstrap-icons';


const navBar = () => {
  return (
    <>
      <Navbar className='navbar' variant="dark">
        <Container Fluid>
          <Navbar.Brand href="#">
          <img
              src={logo}
              width="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#films">Films</Nav.Link>
            <Nav.Link href="#new">New & Popular</Nav.Link>
            <Nav.Link href="#my list">My List</Nav.Link>
            <Nav.Link href="#browse">Browse by Languages</Nav.Link>
          </Nav>
          
          <Nav className='align-items-center ml-auto'>
            <Nav.Link href="#"><Search /></Nav.Link>
            <Nav.Link href="#"><Bell /></Nav.Link>
            <Nav.Link href="#">
            <img
              src={avatar}
              width="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Nav.Link>
            
             <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
             </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;