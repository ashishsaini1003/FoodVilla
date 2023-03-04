import logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";
import Auth from "./Auth";
const Header = () =>{
    return(
        <div className="Header" >
            <Link to="/"><img src={logo} className="logo"/></Link>
            <h1>FoodVilla</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><Auth/></li>
            </ul>
        </div>
    )
}

export default Header;