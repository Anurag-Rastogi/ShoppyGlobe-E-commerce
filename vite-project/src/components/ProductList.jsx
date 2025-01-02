import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";


function ProductList() {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
 
  const{data,error,loading}=useFetch(
    "https://dummyjson.com/products"
  );

useEffect(()=>{
  if(data){
    setFilteredProducts(data.products);
  }
},[data]);
if(error){
  return <p>Error in Loading Data: {error}</p>;
}
if(loading){
  return <p>Loading...</p>
}

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchText(query);

    const filtered = data.products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // making an API call to fetch data inside use effect to optimize our app loading


  return (
    <>
      <div className="search">
        <div className="search-field">
          <input type="text" placeholder="Search.." className="search-input" onChange={handleSearch} value={searchText}
          />
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((data) => (
          <Link to={`/product/${data.id}`} key={data.id}><ProductItem key={data.id} productDetails={data} /></Link>
        ))}
      </div>
    </>
  );
}

export default ProductList;
