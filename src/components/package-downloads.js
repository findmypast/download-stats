import React from 'react';
import request from 'superagent';

/* Challenges:

*/

class PackageDownloads extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			downloadCount: 0
		}
	}

	static defaultProps = {
		period: 'last-day',
		packageName: 'lodash',
		children: 'Downloads'
	}

	componentDidMount(){
		const { period, packageName } = this.props;
		request('GET', 'https://api.npmjs.org/downloads/point/'+period+'/'+packageName)
		.end((err, res) => {
			if(res.ok){
				this.setState({
					downloadCount: res.body.downloads
				});
			}
		});
	}

	render(){
		const { children } = this.props;
		return (
			<div>
				<strong className="downloadCount">
				{this.state.downloadCount}
				</strong>&nbsp;
				{children}
			</div>
		);
	}
}

export default PackageDownloads;