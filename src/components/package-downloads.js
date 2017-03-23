import React from 'react';
import request from 'superagent';

/* Get the download stats from npm for lodash

- superagent is a simple AJAX API library, which is easy to use
- npm i superagent --save
- npm download api: https://github.com/npm/download-counts
- https://api.npmjs.org/downloads/point/last-day/lodash

- Superagent documentation
`import request from 'superagent'`
- The default import of superagent is a function that has two params
`superagent('GET', 'URLToQuery');` - returns an object with `.end(callback)` method on it
- where we can access any error data and successful response for the server.

request('GET', 'https://api.npmjs.org/downloads/point/last-day/lodash')
.end(function(err, res){
	if(res.ok){
		this.setState({
			downloadCount: res.body.downloads
		});
	}
});

- bind and arrow
*/

class PackageDownloads extends React.Component {
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
				Downloads:&nbsp;
				<strong className="downloadCount">
				{this.state.downloadCount}
				</strong>
			</div>
		);
	}
}

export default PackageDownloads;