import RestaurantCard from "./RestaurantCard"
import Search from "./Search"
import { restaurantList } from "../utils/mockData"

export const MainPageLayout = () => {
    return (
        <div className="body">
            <Search />
            <div className="res-container">
                {restaurantList.map((restaurant, idx) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant.info} />)}
            </div>
        </div>
    )
}