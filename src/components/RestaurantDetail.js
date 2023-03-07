import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
    const {id}=useParams();
    const restaurant=useRestaurant(id);

    return (!restaurant) ? <Shimmer/> :(
        <div className="menu">
        <div>
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