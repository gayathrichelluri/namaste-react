import { useContext, useState } from "react";
import MessageCard from "../MessageCard";
import UserContext from "../../context/UserContext";

const Grocery = () => {
	const { user, setUserName } = useContext(UserContext);

	return (
		<div className='flex flex-col items-center'>
			<MessageCard>
				Sample component to lazy load this page and context example :)
			</MessageCard>
			<div className='flex flex-col items-center gap-4 border-4 rounded-r-md p-16 px-56 shadow-inner'>
				<label className='text-gray-500 font-[fantasy] text-xl'>Context</label>
				<input
					className='border-2 border-gray-400 w-80 px-2 py-1 rounded-sm'
					onChange={(e) =>
						setUserName(e.target.value === "" ? "...." : e.target.value)
					}
				/>
				<div className='items-center font-mono text-white bg-slate-800 px-5 py-1 rounded-sm'>
					{user}
				</div>
			</div>
		</div>
	);
};

export default Grocery;
