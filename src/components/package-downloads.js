import React from 'react';

/* Get the download stats from npm for lodash
- npm i superagent --save
- superagent is a library focused on making ajax calls
- npm download api: https://github.com/npm/download-counts
- https://api.npmjs.org/downloads/point/last-day/lodash

import request from 'superagent'
- the default returned by superagent is a function that has two params
`superagent('GET', 'URLToQuery');`
This returns a promise. A pattern used to handle async events to ensure something will happen.
successful or failed call.
*/

export default class PackageDownloads extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			downloadCount: 0
		}
	}

	componentDidMount(){
		this.setState({
			downloadCount: 211
		});
	}

	render(){
		return (
			<div>
				Downloads: <strong className="downloadCount">{this.state.downloadCount}</strong>
			</div>
		);
	}
}