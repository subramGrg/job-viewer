import axios from "axios";

import {
	setToken,
	setJobs
} from "./job-viewer.actions";

const middleware = ({
	dispatch,
	getState,
}) => (next) => async (action) => {
	if (action.type === "GET_JOBS") {
		const token = getState().jobViewerReducer.token;
		
		axios({
			method: "GET",
			url: "https://geoserviceuat-api.jobtrakka.com/api/v1/job/actual",
			headers: {
				"Authorization": `Bearer ${token}`,
			}
		})
		.then(({ data, }) => {
			dispatch(
				setJobs(data)
			);
		}); 

	}

	next(action);
};

export default middleware;