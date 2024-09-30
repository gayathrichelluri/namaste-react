import { useSelector } from "react-redux";
import MenuCardInfo from "../MenuCardInfo";
import Divider from "../Divider";
import MessageCard from "../MessageCard";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);

	return (
		<div className='flex flex-col m-5 w-7/12 mx-auto align-middle justify-center'>
			<div className='text-2xl font-mono font-bold text-yellow-600 underline'>
				Cart
			</div>
			{cartItems.length === 0 && <MessageCard>Your cart is Empty!</MessageCard>}
			{cartItems.map((cartItem) => (
				<MenuCardInfo card={cartItem} key={cartItem.id} />
			))}
		</div>
	);
};

export default Cart;
