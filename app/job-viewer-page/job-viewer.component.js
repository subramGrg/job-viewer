import React from "react";

import PostJob from "post-job/post-job.component";
import "./job-viewer.scss";

class JobViewer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
		const {
			getJobs,
			jobs,
		} = this.props;

		if(jobs.length > 0) {
			return "";
		}

		getJobs();
	}

	getJobs() {
		return this.props.jobs.map((job, index) => 
			<tr key={index}>
				<td>{job.reference}</td> 
				<td>{job.title}</td>
				<td>{job.description}</td>
				<td>{job.clients[0].first_name}, {job.clients[0].last_name}</td>
				<td>{job.company}</td>
				<td>{job.address.address1}, {job.address.city}, {job.address.state}, {job.address.postcode}</td>
				<td>{job.job_status.name}</td>
			</tr>
		);
	}

	renderViewer(jobs) {
		return <table
					styleName="table">
					
					<tbody>
						<tr styleName="heading">
							<td>Reference</td>
							<td>Title</td>
							<td>Description</td>
							<td>Client name</td>
							<td>Company</td>
							<td>Job Address</td>
							<td>Status</td>
						</tr>

						{this.getJobs()}
					</tbody>
		</table>;
	}

    render() {
		const {
			jobs,
		} = this.props;
		
		const main = (jobs.length > 0) ?
			this.renderViewer(jobs) : 
			<div styleName="loader">loading...</div>

		return(
			<div styleName="wrapper">
				<div styleName="info_wrapper">
					{main}
				</div>
				
				<PostJob />
			</div>
        );
    }
}

export default JobViewer;