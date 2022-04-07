import { Carousel } from 'react-bootstrap'
import group4 from '../../assets/img/group4.png'

export function Conheçanossosplanos () {
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