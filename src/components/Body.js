import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./search";
import Shimmer from "./Shimmer";


const Body = () =>{

    const [allRestaurant,setAllRestaurant]= useState([]);
    
    const [filteredRestaurant,setFilteredRestaurant]= useState([]);
    
    function restaurantFilter(text){
        const data=allRestaurant.filter((filteredRestaurant)=>filteredRestaurant.data.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredRestaurant(data);
    }

    useEffect(()=>{
        apiCalls();
    },[])

    async function apiCalls(){
        try{
            const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json= await data.json();
            setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch(error){
            console.error("Error fetching restaurant data");
        }
    }

    if(!allRestaurant) return null;

    return  (allRestaurant.length === 0) ? <Shimmer/> : (
       <>
        <SearchBar restaurantFilter={restaurantFilter}/>
        <div id="Body" >
            {(filteredRestaurant.length===0) ? <h1>Empty list</h1> : filteredRestaurant?.map((restaurant)=>{
                return <RestaurantCard restaurant={restaurant.data}/>;
           })}
        </div>
        </>
    )
}

export default Body;