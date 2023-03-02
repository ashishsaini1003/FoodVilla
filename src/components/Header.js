import SearchBar from "./search"
import logo from "../../images/logo.jpg"

const Header = () =>{
    return(
        <div id="Header" >
            <img src={logo} id="logo"/>
            <SearchBar/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

        </div>
    )
}

export default Header;