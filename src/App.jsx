import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import CartProvider from './context/CartContex';
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  return (
    <>
    <BrowserRouter>

      <CartProvider>

        <NavBar/>

        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:category' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/contacto' element={<ContactForm/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='*' element={<Error/>}/>
          
        </Routes>

        <Footer/>

      </CartProvider>
      
    </BrowserRouter>
    </>
  );
};

export default App;