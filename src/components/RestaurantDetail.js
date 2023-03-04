import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
    const {id}=useParams();
    const [restaurant,setRestaurant] = useState(null);
    useEffect(()=>{
        getRestaurantDetails();
    },[]);

    async function getRestaurantDetails(){
        try{
        const data= await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.935192981ng=77.62448069999999&menuId="+id);
        const json= await data.json();
        setRestaurant(json.data);
        }
        catch(error){
            console.log("error in api call")
        }
    }


    return (!restaurant) ? <Shimmer/> :(
        <div className="menu">
        <div style={{}}>
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
        </div>
        <div>
            <h1>MENU</h1>
            <ul>{Object.values(restaurant?.menu?.items).map((item)=>{return <li key={item.id}>{item.name}</li>})}</ul>
        </div>
     </div>
    );
}

export default RestaurantDetails;