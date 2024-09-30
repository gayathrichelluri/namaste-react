import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/images/logo.png";
import "./index.css";
import UserContext from "../../context/UserContext";
import { useSelector } from "react-redux";
import CartIcon from "../../utils/icons/CartIcon";

const Header = () => {
	const [authBtn, setAuthBtn] = useState("Login");
	const userContext = useContext(UserContext);
	const totalCartItems = useSelector((state) => state.cart.items.length);

	const toggleAuthBtn = () => {
		if (authBtn === "Login") setAuthBtn("Logout");
		else setAuthBtn("Login");
	};

	return (
		<div className='flex justify-between shadow-md m-1 font-mono text-sm'>
			<Link to='/'>
				<img className='w-28' src={logo} />
			</Link>
			<div className='flex items-center gap-10 mr-8'>
				<Link to='/' className='nav-item'>
					Home
				</Link>
				<Link to='/about' className='nav-item'>
					About
				</Link>
				<Link to='/grocery' className='nav-item'>
					Grocery
				</Link>
				<Link to='/cart' className='nav-item'>
					<div className='flex'>
						<CartIcon />
						{totalCartItems > 0 && (
							<div className='absolute bg-red-700 text-green-50  px-1.5 rounded-xl ml-4 mt-[-8] text-[10px]'>
								{totalCartItems}
							</div>
						)}
					</div>
				</Link>
				<button
					className='border border-solid border-gray-100 rounded-md bg-gray-100'
					onClick={toggleAuthBtn}
				>
					{authBtn === "Logout" ? userContext.user : "Login"}
				</button>
			</div>
		</div>
	);
};

export default Header;
