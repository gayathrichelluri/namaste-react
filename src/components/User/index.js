import React from "react";
import './index.css';
import MessageCard from "../MessageCard";

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, imgUrl } = this.props;

        return (
            <MessageCard>
                <div className="user-info">
                    <img src={imgUrl} />
                    <div>{name}</div>
                </div>
                <div className="user-desc">
                    <div>A simple website created while revisiting my react lessons :)</div>
                    <div>Used Swiggy API to replicate the data of restaurants <br /> and github user api to grab just my user details.</div>
                </div>
            </MessageCard>
        );
    }
}

export default User;