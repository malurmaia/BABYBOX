import { Header } from '../../components/layout/header'
import Hero from '../../assets/img/Group-3.jpg'
import { Comofuncionasection } from '../../components/layout/comofunciona'
import { Conheçanossosplanos } from '../../components/layout/planos'
export function Homeview() {
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