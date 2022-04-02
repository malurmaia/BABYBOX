import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './assets/img/LOGO.png'
function Header () {
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
        </Container>
      </Navbar>
    </header>
  )
}
function Homeview() {
  return (
  <>
   <Header />
   <p>HERO</p>
   <p>Como funciona</p>
   <p>Planos</p>
  </>
  )
}
function App() {
  return <Homeview/>;
}

export default App;
