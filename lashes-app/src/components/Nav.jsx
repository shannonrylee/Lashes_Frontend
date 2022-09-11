import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"/>
    <div>
    </div>

    <nav class="nav-middle">
        <ul>
           <li><a href="#"><Link to="/">Home</Link></a></li>
            <li><a href="#"><Link to="/products">Shop</Link></a></li>
            <li><a href="#"><Link to="/howto">How-To</Link></a></li>
        </ul>
    </nav>

    <nav class="nav-right">
        <ul>
            <li><a href="#"><i class="fas fa-search"></i></a></li>
            <li><a href="#"><i class="fas fa-user"></i><Link to="/signin">Sign In</Link></a></li>
            <li><a href="#"><i class="fas fa-shopping-cart"><Link to="/checkout">Cart</Link></i> </a></li>
        </ul>
    </nav>
</header>
  )
}

export default Nav