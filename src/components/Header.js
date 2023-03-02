import logo from "../../images/logo.jpg"

const Header = () =>{
    return(
        <div id="Header" >
            <a href="/"><img src={logo} id="logo"/></a>
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