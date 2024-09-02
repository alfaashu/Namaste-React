import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import {useState, useEffect} from "react"

const Body = () => {
    // Local state variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([])

    useEffect(() => {
        fetchData()    
    }, [])

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1127763&lng=77.9924223&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            )

        const json = await data.json()
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
            <button className="filter-btn" 
            onClick={() => {
                // Filter restaurants

                const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4
                )
                setListOfRestaurant(filteredList)
            }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                listOfRestaurant.map((restaurant) => 
                (<RestaurantCard key = {restaurant.info?.id } resData ={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body