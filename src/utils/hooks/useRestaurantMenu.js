import { useEffect, useState } from "react";
import { getRestaurantMenu } from "../../api/getRestaurantMenu";

const useRestaurantMenu = (resId) => {
    const [res, setRes] = useState();

    useEffect(() => {
        (async () => {
            const data = await getRestaurantMenu(resId);
            setRes(data);
        })();
    }, []);

    return res;
}

export default useRestaurantMenu;