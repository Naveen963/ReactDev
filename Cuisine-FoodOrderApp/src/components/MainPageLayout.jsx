import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const MainPageLayout = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const ratingFilterHandler = () => {
        setFilteredList(restaurantList.filter((c) => c.info.avgRating > 4.3))
    }

    const searchFilterHandler = (searchtext) => {
        console.log(searchtext)
        setFilteredList(restaurantList.filter((c) => c.info.name.toLowerCase().includes(searchtext.toLowerCase())))
    }
    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const fetchRestaurantData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9407367&lng=82.2291264&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const { data } = await res.json();

        setRestaurantList(data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return <div className="body">
        <Search searchFilter={searchFilterHandler} />
        <div className="filter">
            <button className="filter-btn" onClick={ratingFilterHandler}>📈 Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {filteredList.length == 0 ? Array.from({ length: 20 }).map(c => <Shimmer />) : filteredList.map((restaurant, idx) => (
                <RestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant.info}
                />
            ))}
        </div>
    </div>
        ;
};
