import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './pages/Register'
import Product from './pages/Product'
import HowTo from './components/HowTo'
import Customer from './components/Customer'

const App = () => {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product/> } />
          <Route path="/howto" element={<HowTo/> } />
          <Route path="/checkout" element={<Customer/>} /> 
          <Route path="/register" elemnet={<Register/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

