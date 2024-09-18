import React from "react";
import User from "../User";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent constructor called");
    }

    render() {
        console.log("Parent render called");

        return (
            <>
                <h1>This is About page!</h1>
                <User name={'John Doe'} location={'Hyderabad'} />
            </>
        );
    }
}

export default About;