
export const getRestaurantMenu = async (resId) => {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}`);
    const result = await response.json();

    const info = result?.data?.cards[2]?.card?.card?.info;
    const resMenu = result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const resRecMenu = resMenu.filter((res) => res?.card?.card?.title?.includes('Recommended'))[0];
    const items = resMenu.filter((res) => (
        !res?.card?.card?.title?.includes('Recommended') &&
        !res?.card?.card['@type']?.includes('NestedItemCategory') &&
        res?.card?.card['@type']?.includes('ItemCategory')
    ));
    const nestedItems = resMenu.filter((res) => (res?.card?.card['@type']?.includes('NestedItemCategory')));

    return {
        info,
        recommended: {
            title: resRecMenu?.card?.card?.title,
            cards: resRecMenu?.card?.card?.itemCards
        },
        items: items?.map(item => ({
            title: item?.card?.card?.title,
            cards: item?.card?.card?.itemCards
        })),
        nestedItems: nestedItems.map((item) => ({
            title: item?.card?.card?.title,
            categories: item?.card?.card?.categories
        }))
    };
}