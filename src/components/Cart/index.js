import { useSelector } from "react-redux";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);
	console.log(cartItems);

	return <div>This is cart page!</div>;
};

export default Cart;
