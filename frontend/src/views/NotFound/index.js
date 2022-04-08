import { Container } from "react-bootstrap";
import { Header } from "../../components/layout/header";

export function NotFoundView () {
    return(
      <>
      <Header/>
      <Container className="text-center m-4">
      <h1>Página não encontrada.</h1>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <p>Utilize o menu principal para navegar entre as paginas.</p>
      </Container>
      {/* Necessário colocar a tag main para manter o footer no final da pagina */}
      {/* <main></main> */}
      </>
    )
  }