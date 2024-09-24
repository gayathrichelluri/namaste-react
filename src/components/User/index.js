import React from "react";
import "./index.css";
import MessageCard from "../MessageCard";
import UserContext from "../../context/UserContext";

class User extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { id, name, imgUrl } = this.props;

		return (
			<MessageCard>
				<div className='user-info'>
					<img src={imgUrl} />
					<div>{name}</div>
					<UserContext.Provider value={{ user: "@provider-context" }}>
						<UserContext.Consumer>
							{(data) => <div>{data.user}</div>}
						</UserContext.Consumer>
					</UserContext.Provider>
					<UserContext.Consumer>
						{(data) => <div>{data.user}</div>}
					</UserContext.Consumer>
				</div>
				<div className='user-desc'>
					<div>
						A simple website created while revisiting my react lessons :)
					</div>
					<div>
						Used Swiggy API to replicate the data of restaurants <br /> and
						github user api to grab just my user details.
					</div>
				</div>
			</MessageCard>
		);
	}
}

export default User;
