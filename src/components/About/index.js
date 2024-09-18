import React from "react";
import User from "../User";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent constructor called");
    }

    componentDidMount() {
        console.log("Parent componentDidMount called");
    }

    render() {
        console.log("Parent render called");

        return (
            <>
                <h1>This is About page!</h1>
                <User id={'First Child'} name={'Gayathri Chelluri'} location={'Hyderabad'} />
                <User id={'Second Child'} name={'Gouthami Chelluri'} location={'Mumbai'} />
                <User id={'Third Child'} name={'Lakshmi Chelluri'} location={'Chennai'} />
            </>
        );
    }
}

export default About;