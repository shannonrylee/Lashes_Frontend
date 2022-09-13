import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = (props) => {

const [product, setProduct] = useState('')

let { id } = useParams() 

useEffect(() => {
  let selectedProduct = props.products.find(
    (product) => product.id === parseInt(id)
  )
  setProduct(selectedProduct)
}, [props.products, id])


  return product ? (
    <div className="productdetails">
      <div className='details-left'>
        <div className='left-image'>
        <img src='https://i.imgur.com/UGEB4qW.png'/>
        </div>
      </div>
      <div className='details'>
        <p className='left-title'>{props.title}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
        </div>
        <div className='detail-right'>
        <div className='right-info'>
          <p>
            Price: <span>{props.price}</span>
          </p>
          <p>
            Status: <span> In Stock </span>
          </p>
          <p>
            Qty 
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
        </div>

        </div>
  ) : null;
}

export default ProductDetails
