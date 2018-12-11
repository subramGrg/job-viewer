import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import jobViewerReducer from "job-viewer-page/job-viewer.reducer";
import jobViewerMiddleware from "job-viewer-page/job-viewer.middleware";
import logInMiddleware from "log-in/log-in.middleware";
import createJobReducer from "create-job-page/create-job-page.middleware";

const middlewares = [
	jobViewerMiddleware, 
	createJobReducer, 
	logInMiddleware
];

if (process.env.NODE_ENV !== "production") {
    middlewares.push(
        createLogger({
            collapsed: true,
        })
    );
}

const reducers = combineReducers({
    jobViewerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, ...middlewares));

export default store;