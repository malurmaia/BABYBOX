import {Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/LOGO.png'

export function Header () {
    return (
      <header>
        <Navbar expand='md' className='navbar-header'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <img src={Logo} alt='Logo BABYBOX carrinho rosa ' width={120} height={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='Header-dropdown'/>
            <Navbar.Collapse id='Header-dropdown'>
              <Nav>
                <Nav.Link as={Link} to='/planos'>Planos</Nav.Link>
                <Nav.Link as={Link} to='/Como-funciona'>Como Funciona</Nav.Link>
                <Nav.Link as={Link} to='/Beneficios'>Benefícios</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* <button className='login'href='/'>Login</button> */}
          </Container>
        </Navbar> 
        
      </header>
    )
  }