import { useEffect,useState } from "react";

const useRestaurant = (id) => {
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
    return restaurant;

}

export default useRestaurant;