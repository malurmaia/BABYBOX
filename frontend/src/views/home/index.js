import { Header } from '../../components/layout/header'
import Hero from '../../assets/img/Group-3.jpg'
import { Comofuncionasection } from '../../components/layout/comofunciona'
import { Conheçanossosplanos } from '../../components/layout/planos'
import { Link } from 'react-router-dom'

export function Homeview() {
    return (
    <>
     <Header />
     <section> 
        <div className='nenem'>
         <a as={Link} to='/'> <img src={Hero} alt='Criança sorrindo' width={2200} height={800} className='img-fluid nenem
          '/></a>
        </div>
     </section>
     <Comofuncionasection/>
     <Conheçanossosplanos/>
    </>
    )
  }