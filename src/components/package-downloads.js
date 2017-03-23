import React from 'react';
import request from 'superagent';

/* Make PackageDownloads component more reusable

npm downloads documentation: https://github.com/npm/download-counts

- We can use props to customise parts of the request
- The npm api url has two parts we can customise last-day/packagename

	static defaultProps

		const { period, packageName } = this.props;
		request('GET', 'https://api.npmjs.org/downloads/point/'+period+'/'+packageName)
		.end((err, res) => {
			if(res.ok){
				this.setState({
					downloadCount: res.body.downloads
				});
			}
		});

- string interpolation
- get another package React
- customise download text with children?
*/

class PackageDownloads extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			downloadCount: 0
		}
	}

	componentDidMount(){
		const { period, packageName } = this.props;
		request('GET', 'https://api.npmjs.org/downloads/point/last-day/lodash')
		.end((err, res) => {
			if(res.ok){
				this.setState({
					downloadCount: res.body.downloads
				});
			}
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