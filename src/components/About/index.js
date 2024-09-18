import React from "react";
import User from "../User";

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'default',
                location: 'default'
            }
        }
    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/gayathrichelluri");
        const data = await response.json();

        this.setState({
            userInfo: data
        })
    }

    render() {

        const { id, name, avatar_url } = this.state.userInfo;

        return (
            <>
                <User id={id} name={name} imgUrl={avatar_url} />
            </>
        );
    }
}

export default About;