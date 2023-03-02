import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./search";
const Body = () =>{

    const [allRestaurant,setAllRestaurant]= useState(restaurantList);
    
    const [restaurant,setRestaurant]= useState(restaurantList);
    
    function restaurantFilter(text){
        const data=allRestaurant.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(text.toLowerCase()));
        setRestaurant(data);
    }
    return(
        <>
        <SearchBar restaurantFilter={restaurantFilter}/>
        <div id="Body" >
           {restaurant?.map((restaurant)=>{
                return <RestaurantCard restaurant={restaurant.data}/>;
           })}
            {restaurant?.map((restaurant)=>{
                return <RestaurantCard restaurant={restaurant.data}/>;
           })}
        </div>
        </>
    )
}

export default Body;