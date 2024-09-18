import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.id + " constructor called");
    }

    componentDidMount() {
        console.log(this.props.id + " componentDidMount called");
    }

    render() {
        const { id, name, location } = this.props;
        console.log(id + " render called")

        return (
            <div>
                <div>{name}</div>
                <div>{location}</div>
            </div>
        );
    }
}

export default User;