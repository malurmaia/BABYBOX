import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import group4 from '../../assets/img/group4.png'

export function Conheçanossosplanos () {
    return (
      <section className='nossosplanosel'>
        <Carousel className='carouselBorder'>
          <Carousel.Item>
            <Carousel.Caption >
            <img src={group4} alt='Conheça nossos planos com um carrinho rosa de cada lado' className='img-fluid d-block w50 conhecanossosplanosimg'/>
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
                <button className='assinarplano' as={Link} to='/'>Assine esse plano. </button>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> 
            <img src={group4} alt='Conheça nossos planos com um carrinho rosa de cada lado' className='img-fluid d-block w50 conhecanossosplanosimg'/>
            <Carousel.Caption>
              <h1>Assinatura Semestral</h1>
              <div className='planoanualsec'>
              <h3>Vaga garantida para 6 viagens.</h3>
                <li>4 a 5 itens de acordo com a fase do bebê.</li>
                <li>1 livro para a mamãe.</li>
                <li>Conteúdos exclusivos para ampliar a experiência.</li>
                <li>cupom de 50% de desconto em lojas parceiras. </li>
                <h2>R$110,00</h2>
                <p>+ Taxa de entrega</p>
                <button className='assinarplano' as={Link} to='/'>Assine esse plano. </button>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src={group4} alt='Conheça nossos planos com um carrinho rosa de cada lado' className='img-fluid d-block w50 conhecanossosplanosimg'/>
            <Carousel.Caption>
              <h1>Assinatura Mensal</h1>
              <div className='planoanualsec'>
              <h3>Pagamento mensal. Pode ser cancelado a qualquer momento sem multa.</h3>
                <li>4 a 5 itens de acordo com a fase do bebê.</li>
                <li>1 livro para a mamãe.</li>
                <li>Conteúdos exclusivos para ampliar a experiência.</li>
                <h2>R$125,00</h2>
                <p>+ Taxa de entrega</p>
                <button className='assinarplano' as={Link} to='/'>Assine esse plano. </button>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  
      </section>
    )
  }