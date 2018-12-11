import {
	connect
} from "react-redux";
import {
	bindActionCreators
} from "redux";

import CreateJob from "./create-job-page.component";
import * as createJobActions from "./create-job-page.actions";

const mapDispatchToProps = (dispath) => ({
	...bindActionCreators({
		...createJobActions,
	}, dispath),
});

const mapStateToProps = (store) => ({
	taskCreated: store.jobViewerReducer.taskCreated,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);