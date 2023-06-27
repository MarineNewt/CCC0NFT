import React, { Component } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'; 
import logo from '../images/Wzrd.png'

class NavBar extends Component {
  render() {
    return (
  <Navbar bg="" expand="md" style={{zIndex: 5}} className="navbarfull">  
    <Container>  
      <Navbar.Brand href="/" style={{color: 'white'}}>ccc0 NFT</Navbar.Brand>  
      <img style={{border: 'solid black'}} src={logo} alt="logo" className='navimage'></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav>
        <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.scroll('home')}}>Home</Nav.Link> 
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.scroll('mint')}}>Mint</Nav.Link>
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.scroll('auction')}}>Auction</Nav.Link>
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.scroll('analytics')}}>Analytics</Nav.Link>
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
    );
  }
}

export default NavBar;