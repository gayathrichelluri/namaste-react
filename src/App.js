import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import './index.css';

const App = () => (
    <div id="container">
        <Header />
        <RouterProvider router={appRouter} />
    </div>
);

const appRouter = createBrowserRouter([
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
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
