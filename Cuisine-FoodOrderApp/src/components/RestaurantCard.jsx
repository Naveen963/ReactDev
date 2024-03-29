
const imageBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId: imageURL } = props.restaurant
    return (
        <div div className="res-card" >
            <img src={imageBaseURL + imageURL} alt="restaurant-logo" className='res-img' />
            <div className='res-detail'>
                <h3>{name}</h3>
                <i style={{ color: 'grey' }} >{cuisines.slice(0, 4).join(", ") + (cuisines.length > 4 ? '...' : '')}</i>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime}</h4>
            </div>
        </div >
    )
}

export default RestaurantCard