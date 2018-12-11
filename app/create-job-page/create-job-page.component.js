import React from "react";
import {
	Link,
	Redirect
} from "react-router-dom";

import "./create-job.scss";

class CreateJob extends React.Component {
    constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			title: null,
			address: null,
			description: null,
			error: null,
		};
    }

	componentWillUnmount() {
		this.props.setTaskCreated(false);
	}

	handleSubmit(e) {
		e.preventDefault();
		let hasErrors = false;

		[this.state.title, 
		this.state.description,
		this.state.address].forEach(field => {
			if (!field) {
				hasErrors = true;

				this.setState({
					error: "Please fill title, address, description",
				});
			}
		});

		if (hasErrors) {
			return "";
		}

		this.props.createJob(
			this.state
		);
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
			<h3>Create a Job:</h3>
			<p>{this.state.error}</p>

			<p styleName="field_wrapper">
				<label>Job Title: </label>
				<input 
					type="text" 
					name="title"
					onChange={(e) => this.handleInputChange(e)} />
			</p>
			<p styleName="field_wrapper">
				<label>Description:</label>
				<textarea 
					name="description"
					onChange={(e) => this.handleInputChange(e)} />
			</p>
			<p styleName="field_wrapper">
				<label>Address: </label>
				<input 
					type="text" 
					name="address"
					onChange={(e) => this.handleInputChange(e)} />
			</p>

			<p styleName="options">
				<input type="submit" value="submit"/>
				
				<span>or</span>

				<Link
					styleName="nav"
					to="/">
					back to job listing
				</Link>
			</p>
		</form>;
	}

    render() {
		return(
			<div styleName="wrapper">
				{(this.props.taskCreated) ?
					<Redirect to="/jobs" /> :
					this.renderCreateJob()}
			</div>
        );
    }
}

export default CreateJob;