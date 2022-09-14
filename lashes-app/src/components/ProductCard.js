import { Link } from 'react'

const ProductCard = (props) => {


  return (
<section>
  <div class="product-grid">
    <div class="card">
      <img class="card-img" src={props.image} alt="product-image"/>
      <div class="flex-row space-between w-full mb-sm">
      </div>
      <h1 class="product-name">{props.title}</h1>
      <div class="flex-row">
        <p class="price"><span>{props.price}</span></p>
      </div>
      <div class="btn-col">
        <a href="#" class="icon-link">
          Add to Cart 
          <svg fill="none" class="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M17.9645 12.9645l.071-7h-7.071" stroke-linecap="round"></path>
            <path d="M5.9645 17.9645l12-12" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
   </div>
</section>
  );
}

export default ProductCard;