import "./ProductItem.css"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


function ProductItem(props){

    const dispatchs = useDispatch();

    function handleAddProduct(item){
      dispatchs(addItem(item));
    }
    const imageUrl = props.productDetails.images && props.productDetails.images[0];
    return(
        <>
        <div className="product-card">
        <img src={imageUrl} alt="" height="200px" width="200px" className="product-img" />
        <div className="product-details">
            <h2 className="product-title" >{props.productDetails.title}</h2>
            <h3 className="product-category">{props.productDetails.category}</h3>
            <p className="product-description" >{props.productDetails.description}</p>
            <div className="product-card-footer">
            <p className="product-price" >{props.productDetails.price}</p>
            <button onClick={()=>handleAddProduct(props.productDetails)} className="btn">Add to Cart</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default ProductItem;