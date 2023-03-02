import logo from "../../images/logo.jpg"

const Header = () =>{
    return(
        <div id="Header" >
            <a href="/"><img src={logo} id="logo"/></a>
            <h1 style={{paddingRight:"25%"}}>FoodVilla</h1>
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