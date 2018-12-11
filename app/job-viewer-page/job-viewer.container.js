import {
	connect
} from "react-redux";
import {
	bindActionCreators
} from "redux";

import JobViewer from "./job-viewer.component";
import * as JobViewerActions from "./job-viewer.actions";

const mapDispatchToProps = (dispath) => ({
	...bindActionCreators({
		...JobViewerActions,
	}, dispath),
});

const mapStateToProps = (store) => ({
	jobs: store.jobViewerReducer.jobs,
});

export default connect(mapStateToProps, mapDispatchToProps)(JobViewer);