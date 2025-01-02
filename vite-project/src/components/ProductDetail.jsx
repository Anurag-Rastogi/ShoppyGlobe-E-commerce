import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import "./ProductDetail.css";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../utils/cartSlice";

function ProductDetail() {
  const { id } = useParams(); // Get the product id from URL params
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);
  const dispatch = useDispatch();

function handleAddProduct(item){
  dispatch(addItem(item));
}
function handleRemoveItem(){
  dispatch(removeItem())
}

  // Show loading state while fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show error if there's an issue with the fetch
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // If data is available, render product details
  if (data) {
    const product = data; // Directly using the fetched data as the product

    return (
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-detail-info">
            <h2 className="product-detail-title">{product.title}</h2>
            <p className="product-detail-description">{product.description}</p>
            <h3 className="product-detail-price">Price: ₹{product.price}</h3>
            <button onClick={()=>handleAddProduct(product)} className="btn">Add to Cart</button>
            <button onClick={handleRemoveItem} className="btn removebtn" >Remove Item</button>
          </div>
          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.title}
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }

  // Return null or a message if there's no data
  return null;
}

export default ProductDetail;



