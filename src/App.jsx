import './App.css'
import NavBar from './components/NavBar/NavBar'
import './components/NavBar/NavBar.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>

      <NavBar/>

      <ItemListContainer greeting={"Bienvenidos"}/>

    </>
  )
}

export default App
