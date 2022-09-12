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
    <div className="detail">
      <div className="detail-header">
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{product.title}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1>{product.image}</h1>
          <h3>{product.description}</h3>
          <h3>{product.price}</h3>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  ) : null;
}

export default ProductDetails
