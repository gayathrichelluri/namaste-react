import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
    return (
        <h1 className='head' tabIndex={5}>Namaste React using JSX</h1>
    );
}

// * Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1>Namaste React using functional components!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 
