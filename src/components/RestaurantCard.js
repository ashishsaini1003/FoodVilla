import { IMG_CDN_URL } from "../constants";

const RestaurantCard=(props)=>{
    return(
        <div id="card" >
            <img alt= "Item" src= {IMG_CDN_URL+props.restaurant.cloudinaryImageId}/>
            <h2 style={{color:"red"}}>{props.restaurant.name}</h2>
            <h4>{props.restaurant.cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;