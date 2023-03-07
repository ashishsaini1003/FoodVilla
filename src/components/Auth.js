import { useState } from "react";

const Auth = () => {

    const [authStatus,setAuthStatus] =useState("login");
    return (
        <div className="auth">
            {console.log(authStatus)}
            <button onClick={()=>(authStatus==="login")? setAuthStatus("logout") : setAuthStatus("login")}>{authStatus}</button>
        </div>
    )
}

export default Auth;