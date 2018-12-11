const initialState = {
	jobs: [],
};

export default (state=initialState, action) => {
	switch (action.type) {
		case "SET_JOBS":
			return {
				...state,
				jobs: action.payload,
			}
		default:
			return state;
	}
};