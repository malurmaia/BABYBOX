import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './assets/img/LOGO.png'
import Hero from './assets/img/Group-3.jpg'
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
   <main> 
     
      <section className=''>
       <a href='/'> <img src={Hero} alt='Criança sorrindo' width={1400} height={600} className='img-fluid
        '/></a>
      </section>
     
   </main>
   <p>Como funciona</p>
   <p>Planos</p>
  </>
  )
}
function App() {
  return <Homeview/>;
}

export default App;
