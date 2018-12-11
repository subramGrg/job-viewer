const initialState = {
	jobs: [],
	token: null,
	taskCreated: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_JOBS":
			return {
				...state,
				jobs: action.payload,
			}

		case "SET_TOKEN":
			return {
				...state,
				token: action.payload,
			}

		case "SET_TASK_CREATED":
			return {
				...state,
				taskCreated: action.payload,
			}
		default:
			return state;
	}
};