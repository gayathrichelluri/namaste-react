import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import "./index.css";
import RestaurantMenu from "./components/RestaurantMenu";
import MessageCardSkeleton from "./components/Shimmer/MesageCardSkeleton";
import UserContext from "./context/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

// If we wan't use lazy loading, we can directly import the component
// we have to wrap the component in lazy function
// and then make sure to wrap the lazy component in a React.Suspense component
// and then provide fallback UI while the component is loading
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
	const userContext = useContext(UserContext);
	const [userName, setUserName] = useState(userContext.user);

	return (
		<div id='container'>
			<Provider store={appStore}>
				<UserContext.Provider value={{ user: userName, setUserName }}>
					<Header />
					<Outlet />
				</UserContext.Provider>
			</Provider>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
				errorElement: <Error />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<MessageCardSkeleton />}>
						<Grocery />
					</Suspense>
				),
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
