import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>

      <NavBar/>

      <ItemListContainer greeting={"Soluciones para Potenciar tu Negocio"}/>

      <ItemDetailContainer id={1}/>

      <Footer/>

    </>
  )
}

export default App
