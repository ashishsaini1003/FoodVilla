import React from "react";
import ReactDOM  from "react-dom/client";
// import "./app.css"
import SearchBar from "./components/search";
import logo from "./images/logo.jpg"

const Header = () =>{
    return(
        <div id="container" >
            <img src={logo} id="logo"/>
            <SearchBar/>
            <h2 id="h1">User</h2>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);