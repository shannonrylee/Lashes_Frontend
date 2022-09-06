import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <div>
        <Link to="/productcard">Shop</Link>
        <Link to="/howto">How-To</Link>
        <Link to="/checkout">Cart</Link>
      </div>
    </nav>
  )
}

export default Nav