import "./Header.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
    const cartItems=useSelector((store)=>store.cart.items);
    return (
        <>
            <nav className="navbar">
               <Link to="/"><div className="logo">ClickCart</div></Link> 
                <ul className="nav-links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About us</li></Link>
                    <Link to="/contact"><li>Contact us</li></Link>
                </ul>
                <Link to="/cart"><button className="cart-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart Icon" />
                    {cartItems.length}
                </button></Link>
            </nav>

        </>
    )
}
export default Header;