import axios from "axios";
import { setTaskCreated } from "./create-job-page.actions";

const middleware = ({
	dispatch,
	getState,
}) => (next) => async (action) => {
	if (action.type === "CREATE_JOB") {
		axios({
				method: "POST",
				url: "https://geoserviceuat-api.jobtrakka.com/api/v1/job/actual",
				headers: {
					"Authorization": `Bearer ${getState().jobViewerReducer.token}`,
				},
				data: {
					"title": action.payload.title,
					"description": action.payload.description,
					"address": {
						"address1": action.payload.address,
					},
					"client_id": "275200",
				}
			})
			.then(res => {
				dispatch(
					setTaskCreated(true)
				);
			});
	}

	next(action);
};

export default middleware;