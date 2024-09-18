import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("Child constructor called");
    }

    componentDidMount() {
        console.log("Child componentDidMount called");
    }

    render() {
        const { name, location } = this.props;
        console.log("Child render called")

        return (
            <div>
                <div>{name}</div>
                <div>{location}</div>
            </div>
        );
    }
}

export default User;