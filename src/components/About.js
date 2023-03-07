import { Outlet,Link } from "react-router-dom";

import ProfileClass from "./ProfileClass";

const About=()=>{
    return(
        <div>
            <h1>Hey there this is my about us page!!</h1>
            <Link to="/about/profile"><button>Profile page</button></Link>
            <Outlet/>
        </div>
    )
}

export default About;