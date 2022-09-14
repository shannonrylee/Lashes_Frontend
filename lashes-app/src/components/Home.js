import { Link } from "react-router-dom";

const Home = () => {
return(
   <div className="Home">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"/>
 <main>
            <section class="left">
                <div class="product-info">
                    <h1>Fox Eye🦊</h1>
                    <p>New and improved at home eyelash extensions</p>
                    <h2>$10</h2>
                    <div class="info-btns">
                        <div class="btn discover-btn">more info</div>
                        <div class="btn cart-btn"><Link to="/checkout">add to cart</Link></div>
                    </div>
                </div>
            </section>
            <section class="right">
                <img src="http://cdn.shopify.com/s/files/1/0259/7509/5375/articles/Ella_lashes_1200x.gif?v=1645735108" alt=""/>
            </section>
        </main>
        </div> 
)
}
export default Home;