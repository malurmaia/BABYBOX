import { } from './header'
export function Layout ({children}){
    return(
      <>
      <Header/>
      <main>
        {children}
      </main>
      </>
    )
  }