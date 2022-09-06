import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import react from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import CheckOut from './components/Customer'
import HowTo from './components/HowTo'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/productcard" element={<ProductCard/> } />
          <Route path="/howto" element={<HowTo/> } />
          <Route path="/checkout" element={<CheckOut/>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

