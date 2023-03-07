import React, { useState } from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            UserProfile:{
                name:"default Name",
                company:"default Company"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ashishsaini1003");
        const json =await data.json();
        this.setState({
            UserProfile:json
        })
    }
    render(){
        return(
        <div>
            <img src="https://avatars.githubusercontent.com/u/73282204?v=4" />
            <h1>{this.state.UserProfile.name}</h1>
            <h1>{this.state.UserProfile.company}</h1>
            <h1>{this.props.job}</h1>
            <h1>This is profile page</h1>
        </div>
        )
    }
}


export default ProfileClass;