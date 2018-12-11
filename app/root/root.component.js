import React from "react";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import LogIn from "log-in/log-in.container";
import PrivateRoute from "./private-route";
import JobViewerPage from "job-viewer-page/job-viewer.container";
import CreateJobPage from "create-job-page/create-job-page.container";

import "./root.scss";

const Root = ({ loggedIn }) => (
	<Router>
		<div styleName="container">
			<Route exact path="/" component={LogIn} />
			<PrivateRoute 
				path="/jobs"
				loggedIn={loggedIn}
				component={JobViewerPage} />
			<PrivateRoute 
				path="/create-job"
				loggedIn={loggedIn}
				component={CreateJobPage} />
		</div>
	</Router>
);
export default Root;