import React from "react";
import {
	Link
} from "react-router-dom";

import "./post-job.scss";

const PostJob = () => (
	<Link
		to="/create-job"
		styleName="container">
		create job
	</Link>
);

export default PostJob;