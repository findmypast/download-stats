import React from 'react';
import request from 'superagent';

/* PropTypes
- Type checking
More info: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
- Examples
optionalNumber: React.PropTypes.number
optionalString: React.PropTypes.string

- make a prop required
requiredAny: React.PropTypes.any.isRequired

static propTypes = {
	packageName: PropTypes.string.isRequired
}

Challenges:

- Format download number

- Show the `start` and `end` dates for each download

- Make a new component to list the daily download counts for the last month for a package
here is the end point https://api.npmjs.org/downloads/range/last-month/lodash

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
