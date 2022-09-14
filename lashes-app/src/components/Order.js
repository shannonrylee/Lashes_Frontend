import { Link } from 'react'
const Order = () => {
  return(
    <div className="order">
      <div className="image-container">
      <img className="order-image" src='https://i.imgur.com/UGEB4qW.png'/>
    </div>
     {/* <Link to={'product/:id'} className="cart-title">
      <p>Product 1</p>
     </Link> */}
     <p className='cart-price'>$10</p>
      <select className='cart-select'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className='cart-delete'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}
export default Order;