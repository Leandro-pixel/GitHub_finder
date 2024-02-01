import { Outlet } from "react-router-dom"//para mostrar o conteudo do router que foi configurado

import classes from './App.module.css'// css em modulo para o css não vazar para outros componentes

function App() {

  return (
    <div className={classes.app}/* assim o css só vaia para este elemento e seus filhos */>
      <h1>github finder</h1>
      <Outlet/>
    </div>
  )
}

export default App
