import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


const Body = () =>{
    return(
        <div id="Body" >
           {restaurantList?.map((restaurant)=>{
                return <RestaurantCard restaurant={restaurant.data}/>;
           })}
        </div>
    )
}

export default Body;