
import './App.css';
import Nevbar from './components/Nevbar/Nevbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Catagory from './pages/Catagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import womens_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>

      <Nevbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Catagory banner={men_banner} Catagory="men"/>}/>
        <Route path='/womens' element={<Catagory banner={womens_banner} Catagory="women"/>}/>
        <Route path='/kids' element={<Catagory  banner={kids_banner} Catagory="kid"/>}/>
        <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Login' element={<Login />}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
