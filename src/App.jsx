import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>

      <Footer/>
      
    </BrowserRouter>
    </>
  );
};

export default App;