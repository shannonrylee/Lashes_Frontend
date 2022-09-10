const ProductCard = (props) => {
  return (
  <div>
  <img src={props.image} alt={props.title}/>
  <h3>{props.title}</h3>
  <h3>{props.description}</h3>
  <h2>{props.price}</h2>
  </div>
  );
}

export default ProductCard;