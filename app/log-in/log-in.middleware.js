import axios from "axios";

import {
	setToken,
} from "job-viewer-page/job-viewer.actions";

const middleware = ({
	dispatch,
	getState,
}) => (next) => async (action) => {
	if (action.type === "LOG_IN") {
		const { 
			username, 
			password 
		} = action.payload;
		
		axios({
				method: "POST",
				url: "https://geoserviceuat-api.jobtrakka.com/oauth/token",
				data: {
					grant_type: "password",
					login: username,
					password,
				}
			})
			.then(({
				data,
			}) => {
				dispatch(
					setToken(data.access_token)
				);
			});

	}

	next(action);
};

export default middleware;