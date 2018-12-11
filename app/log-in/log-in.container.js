import {
	connect
} from "react-redux";
import {
	bindActionCreators
} from "redux";

import LogIn from "./log-in.component";
import * as logInActions from "./log-in.actions";

const mapDispatchToProps = (dispath) => ({
	...bindActionCreators({
		...logInActions,
	}, dispath),
});

const mapStateToProps = (store) => ({
	loggedIn: store.jobViewerReducer.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);