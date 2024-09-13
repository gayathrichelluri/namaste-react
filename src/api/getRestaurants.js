import { restaurantImages } from "../resources/images/restaurants";

const restaurants = [
    {
        id: 1,
        name: "Dosa Hut",
        cuisine: "South Indian Breakfast, Indian",
        rating: 4.6,
        deliveryETA: "25 mins"
    },
    {
        id: 2,
        name: "Ginger",
        cuisine: "North Indian Breads, Authentic, Indian",
        rating: 4.3,
        deliveryETA: "15 mins"
    },
    {
        id: 3,
        name: "Chul Ho",
        cuisine: "Fast Food, Chinese",
        rating: 4.2,
        deliveryETA: "20 mins"
    },
    {
        id: 4,
        name: "Hyderabad House",
        cuisine: "Spicy, Indian",
        rating: 4.5,
        deliveryETA: "25 mins"
    },
    {
        id: 5,
        name: "Chatkazz",
        cuisine: "Street Food, Authentic, Indian",
        rating: 4.3,
        deliveryETA: "20 mins"
    },
    {
        id: 6,
        name: "Mad Down Under",
        cuisine: "Fusion, Indian Sizzler Restaurtant",
        rating: 4.4,
        deliveryETA: "20 mins"
    },
    {
        id: 7,
        name: "A2B Sweets & Restaurant",
        cuisine: "Vegetarian, Indian",
        rating: 3.9,
        deliveryETA: "10 mins"
    },
    {
        id: 8,
        name: "Sarvana Bhavan",
        cuisine: "Vegetarian, Indian",
        rating: 4.0,
        deliveryETA: "15 mins"
    },
    {
        id: 9,
        name: "Not Just Curries",
        cuisine: "Indian",
        rating: 4.0,
        deliveryETA: "18 mins"
    },
    {
        id: 10,
        name: "Anjappar",
        cuisine: "Indian",
        rating: 3.8,
        deliveryETA: "30 mins"
    },
    {
        id: 11,
        name: "Flavours of Nepal",
        cuisine: "Nepalese Restaurant",
        rating: 4.3,
        deliveryETA: "40 mins"
    },
];

export const getRestaurants = () => {
    // ideally we call an api to get the data - let's mock it here
    restaurantImages.filter((img, idx) => {
        restaurants[idx].imgSrc = img;
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(restaurants), 3000);
    });
}

export const getSwiggyRestaurants = async () => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const result = await response.json();

    const gridCards = result?.data?.cards?.filter((card) => card?.card?.card?.id === "restaurant_grid_listing")[0].card?.card;
    console.log(gridCards?.gridElements?.infoWithStyle?.restaurants);

    return gridCards?.gridElements?.infoWithStyle?.restaurants?.map((res) => (
        {
            name: res?.info?.name,
            imgSrc: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`,
            cuisine: res?.info?.cuisines?.join(", "),
            rating: res?.info?.avgRating,
            deliveryETA: res?.info?.sla?.slaString
        }
    ));
}