import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import './index.css';
import RestaurantMenu from './components/RestaurantMenu';
import MessageCardSkeleton from './components/Shimmer/MesageCardSkeleton';

// If we wan't use lazy loading, we can directly import the component
// we have to wrap the component in lazy function
// and then make sure to wrap the lazy component in a React.Suspense component
// and then provide fallback UI while the component is loading
const Grocery = lazy(() => import('./components/Grocery'));

const App = () => (
    <div id="container">
        <Header />
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<MessageCardSkeleton/>}>
                        <Grocery />
                    </Suspense>)
            },
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
