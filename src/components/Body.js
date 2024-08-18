import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import {useState} from "react"

const Body = () => {
    // Local state variable - Super powerful variable
    
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    return (
        <div className='body'>
            <div className='filter'>
            <button className="filter-btn" 
            onClick={() => {
                // Filter restaurants

                const filteredList = listOfRestaurant.filter(
                    (res) => res.data.avgRating > 4
                )
                setListOfRestaurant(filteredList)
            }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                listOfRestaurant.map((restaurant) => 
                (<RestaurantCard key = {restaurant.data.id} resData ={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body