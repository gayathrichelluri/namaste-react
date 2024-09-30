import { useDispatch, useSelector } from "react-redux";
import MenuCardInfo from "../MenuCardInfo";
import MessageCard from "../MessageCard";
import { clearCart } from "../../utils/store/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	return (
		<div className='flex flex-col m-5 w-7/12 mx-auto align-middle justify-center font-mono'>
			<div className='flex flex-row justify-between'>
				<div className='font-bold text-yellow-600'>Cart</div>
				<button
					className='text-xs border-cyan-500 bg-slate-300 px-1.5 py-0.5 text-cyan-800'
					onClick={() => dispatch(clearCart())}
				>
					Clear Cart
				</button>
			</div>

			{cartItems.length === 0 && <MessageCard>Your cart is Empty!</MessageCard>}
			{cartItems.map((cartItem) => (
				<MenuCardInfo card={cartItem} key={cartItem.id} />
			))}
		</div>
	);
};

export default Cart;
