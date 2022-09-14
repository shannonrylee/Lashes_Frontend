import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Product from './pages/Product'
import ProductDetails from './components/ProductDetails'
import Review from './pages/Review'
import Signin from './pages/SignIn'
import Register from './pages/Register'
import AddToCart from './pages/Cart'
import UpdateReview from './pages/UpdateReview'

const App = (props) => {

  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={ <Product/> } />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/signin" element={ <Signin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cart" element={<AddToCart/>} />
          <Route path="/reviews"element={<Review/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

