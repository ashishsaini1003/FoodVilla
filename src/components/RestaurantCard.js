import { IMG_CDN_URL } from "../constants";

const RestaurantCard=(props)=>{
    return(
        <div className="card" >
            <img alt= "Item" src= {IMG_CDN_URL+props.restaurant.cloudinaryImageId}/>
            <h2 style={{color:"red"}}>{props.restaurant.name}</h2>
            <h4>{(props.restaurant.cuisines.length>4)?props.restaurant.cuisines.slice(0,4).join(", "):props.restaurant.cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;