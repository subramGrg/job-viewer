export const createJob = (payload) => ({
    type: "CREATE_JOB",
    payload,
});

export const setTaskCreated = (payload) => ({
    type: "SET_TASK_CREATED",
    payload,
});