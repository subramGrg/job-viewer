export const getToken = (payload) => ({
    type: "GET_TOKEN",
    payload,
});

export const setToken = (payload) => ({
    type: "SET_TOKEN",
    payload,
});

export const getJobs = (payload) => ({
    type: "GET_JOBS",
    payload,
});

export const setJobs = (payload) => ({
    type: "SET_JOBS",
    payload,
});
