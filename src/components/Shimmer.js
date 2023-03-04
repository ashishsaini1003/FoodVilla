import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"

const Shimmer=()=>{
    const [restaurant,setRestaurant]=useState([]);
    return(
        <div className="Body" >
            {Array(12).fill("").map((e,index)=><div key={index} className="shimmer"></div>)}
    </div>
    )
}

export default Shimmer;