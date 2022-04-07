import { Carousel } from 'react-bootstrap'
import notebook from '../../assets/img/computador-portatil.png'
import calendario from '../../assets/img/timetable.png'
import chat from '../../assets/img/chat.png'
import Comofunciona from '../../assets/img/Comofunciona.png'

export function Comofuncionasection () {
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