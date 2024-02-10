import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>

      <NavBar/>

      <ItemListContainer greeting={"Soluciones para Potenciar tu Negocio"}/>

      <Footer/>

    </>
  )
}

export default App
