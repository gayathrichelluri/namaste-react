import { restaurantImages } from "../resources/images/restaurants";

const restaurants = [
    {
        id: 1,
        name: "Dosa Hut",
        cuisine: "South Indian Breakfast, Indian",
        rating: "4.6 Stars",
        deliveryETA: "25 mins"
    },
    {
        id: 2,
        name: "Ginger",
        cuisine: "North Indian Breads, Authentic, Indian",
        rating: "4.3 Stars",
        deliveryETA: "15 mins"
    },
    {
        id: 3,
        name: "Chul Ho",
        cuisine: "Fast Food, Chinese",
        rating: "4.2 Stars",
        deliveryETA: "20 mins"
    },
    {
        id: 4,
        name: "Hyderabad House",
        cuisine: "Spicy, Indian",
        rating: "4.5 Stars",
        deliveryETA: "25 mins"
    },
    {
        id: 5,
        name: "Chatkazz",
        cuisine: "Street Food, Authentic, Indian",
        rating: "4.3 Stars",
        deliveryETA: "20 mins"
    },
    {
        id: 6,
        name: "Mad Down Under",
        cuisine: "Fusion, Indian Sizzler Restaurtant",
        rating: "4.4 Stars",
        deliveryETA: "20 mins"
    },
    {
        id: 7,
        name: "A2B Sweets & Restaurant",
        cuisine: "Vegetarian, Indian",
        rating: "3.9 Stars",
        deliveryETA: "10 mins"
    },
    {
        id: 8,
        name: "Sarvana Bhavan",
        cuisine: "Vegetarian, Indian",
        rating: "4.0 Stars",
        deliveryETA: "15 mins"
    },
    {
        id: 9,
        name: "Not Just Curries",
        cuisine: "Indian",
        rating: "4.0 Stars",
        deliveryETA: "18 mins"
    },
    {
        id: 10,
        name: "Anjappar",
        cuisine: "Indian",
        rating: "3.8 Stars",
        deliveryETA: "30 mins"
    },
    {
        id: 11,
        name: "Flavours of Nepal",
        cuisine: "Nepalese Restaurant",
        rating: "4.3 Stars",
        deliveryETA: "40 mins"
    },
];

export const getRestaurants = () => {
    // ideally we call an api to get the data - let's mock it here
    restaurantImages.filter((img, idx) => {
        restaurants[idx].imgSrc = img;
    });

    return restaurants;
}