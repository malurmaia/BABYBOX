import {Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../../assets/img/LOGO.png'

export function Header () {
    return (
      <header>
        <Navbar expand='md' className='navbar-header'>
          <Container>
            <Navbar.Brand href='/'>
              <img src={Logo} alt='Logo BABYBOX carrinho rosa ' width={120} height={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='Header-dropdown'/>
            <Navbar.Collapse id='Header-dropdown'>
              <Nav>
                <Nav.Link href='/planos'>Planos</Nav.Link>
                <Nav.Link href='/Como-funciona'>Como Funciona</Nav.Link>
                <Nav.Link href='/Beneficios'>Benefícios</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* <button className='login'href='/'>Login</button> */}
          </Container>
        </Navbar> 
        
      </header>
    )
  }