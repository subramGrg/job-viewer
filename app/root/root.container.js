import { connect } from "react-redux";

import Root from "./root.component";

const mapStateToProps = (store) => ({
	loggedIn: store.jobViewerReducer.token,
});

export default connect(mapStateToProps)(Root);