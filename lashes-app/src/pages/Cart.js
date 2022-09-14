import Order from '../components/Order'

const Cart = () => {

      
return(
    <div className="cart">
    <div className="cart-leftside">
      <h2>Shopping Cart</h2>
    <Order/>
    </div>
    <div className="cart-rightside">
    <div className='cart-info'>
     <p className="subtotal">Subtotal (0) items</p>
    </div>
    <div>
        <button>Proceed to Checkout</button>
    </div>
    </div>
    </div>
)}
export default Cart;