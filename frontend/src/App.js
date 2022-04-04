import { Carousel, Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './assets/img/LOGO.png'
import Hero from './assets/img/Group-3.jpg'
import Comofunciona from './assets/img/Comofunciona.png'
import notebook from './assets/img/computador-portatil.png'
import calendario from './assets/img/timetable.png'
import chat from './assets/img/chat.png'
import group4 from './assets/img/group4.png'

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
          {/* <button className='login'href='/'>Login</button> */}
        </Container>
      </Navbar>
      
    </header>
  )
}
function Comofuncionasection () {
  return (
    <section className='howitworks'>
      <img src={Comofunciona} alt='como funciona e dois carrinhos rosa' width={200} height={100} className='img-fluid comofunciona'/>
      <Carousel>
        <Carousel.Item>
          <img src={notebook} alt='notebook com imagem de um bebe' width={23} height={40} className='img-fluid d-block w-50 notebook'/>
          <Carousel.Caption>
            <p>
            Veja as vantagens e características de cada plano e inscreva-se no que melhor se encaixa ao seu perfil
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={calendario} alt='calendário' className='img-fluid d-block w-50 calendario'/>
          <Carousel.Caption>
          <p>
          Receba mensalmente uma malinha surpresa com os itens essenciais da fase que seu bebê se encontra e uma ajudinha extra para a mamãe.
          </p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={chat} alt='Balão de conversa azul,verde, amarelo com estrela e branco com esclamação vermelha.' className='img-fluid d-block w-50 chat'/>
            <Carousel.Caption>
              <p>
              Amplie sua imersão navegando nos fóruns e conteúdos exclusivos junto com outras mamães
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <button className='buttonknowmore' href='/'>Saiba mais </button>
    </section>
  )
}
function Conheçanossosplanos () {
  return (
    <section className='nossosplanosel'>
      <Carousel>
        <Carousel.Item>
          <img src={group4} alt='Conheça nossos planos com um carrinho rosa de cada lado' className='img-fluid d-block w50 conhecanossosplanosimg'/>
          <Carousel.Caption>
            <h1>Assinatura Anual</h1>
            <div className='planoanualsec'>
            <h3>Vaga garantida para as 12 primeiras viagens na montanha russa que é o primeiro ano do bebê. Presente de fidelidade.</h3>
              <li>4 a 5 itens de acordo com a fase do bebê.</li>
              <li>Roupa temática para mêsversário.</li>
              <li>1 livro para a mamãe.</li>
              <li>Conteúdos exclusivos para ampliar a experiência.</li>
              <li>cupom de 50% de desconto em lojas parceiras. </li>
              <h2>R$99,00</h2>
              <p>+ Taxa de entrega</p>
              </div>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>

    </section>
  )
}

function Homeview() {
  return (
  <>
   <Header />
   <main> 
     
      <section className=''>
       <a href='/'> <img src={Hero} alt='Criança sorrindo' width={1400} height={600} className='img-fluid nenem
        '/></a>
      </section>
     
   </main>
   <Comofuncionasection/>
   <Conheçanossosplanos/>
  </>
  )
}
function App() {
  return <Homeview/>;
}

export default App;
