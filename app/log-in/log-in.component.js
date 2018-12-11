import React from "react";
import { Redirect } from "react-router-dom";

import "./log-in.scss";

class LogIn extends React.Component {
    constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			username: null,
			password: null,
			error: null,
		};
    }

	handleSubmit(e) {
		e.preventDefault();

		if(	
			!this.state.username &&
			!this.state.password
		) {
				this.setState({
					error: "Please user name and password",
				});

				return "";
		}
		
		this.props.logIn({
			username: this.state.username,
			password: this.state.password
		});
	}

	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
	
		this.setState({
		  [name]: value
		});
	}

	renderCreateJob() {
		return <form onSubmit={this.handleSubmit}>
			<h3>Log in:</h3>
			<p>{this.state.error}</p>

			<p styleName="field_wrapper">
				<label>Username: </label>
				<input 
					type="text" 
					name="username"
					onChange={(e) => this.handleInputChange(e)} />
			</p>
			<p styleName="field_wrapper">
				<label>Password:</label>
				<input 
					type="text" 
					name="password"
					onChange={(e) => this.handleInputChange(e)} />
			</p>

			<input type="submit" value="submit"/>
		</form>;
	}

    render() {
		return(
			<div styleName="wrapper">
				{(this.props.loggedIn) ?
					<Redirect to="/jobs" /> :
					this.renderCreateJob()
				}
			</div>
        );
    }
}

export default LogIn;