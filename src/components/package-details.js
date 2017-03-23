import React from 'react';

/* 
- Create a component to show the download counts:

Stateful component
- Components can manage there own state
- Using the ES6 class that extends React.Component we can access the state.
- render method Required - where the JSX is added.
- Can access props on this.props.
- Adding state, create constructor and set a default state. super will call parent contructor.

class PackageDownloads extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			downloadCount: 0
		}
	}

	render(){
		return (
			<div>Downloads: {this.state.downloadCount}</div>
		);
	}
}


- Show lifesycle events

componentWillMount: Before component renders. 
componentDidMount: After component renders. Have access to the DOM. Good time to make API/AJAX calls.
componentWillUnmount: Before component is removed from page. Use to clean up.

- this.setState will trigger the render method with the update state

class PackageDownloads extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			downloadCount: 0
		}
	}

	componentWillMount(){
		console.log('Will Mount');
	}

	componentDidMount(){
		console.log('Did Mount');
		this.setState({
			downloadCount: 211
		});
	}

	render(){
		console.log('render');
		return (
			<div>Downloads: <strong className="downloadCount">{this.state.downloadCount}</strong></div>
		);
	}
}

*/

function PackageDetails({title, github, npmLink}){ // React enforce capital for first charater
	return (
		<div>
			<h2>{title}</h2>
			<p>
				<a href={github}>Github</a> |&nbsp;
				<a href={npmLink}>NPM</a>
			</p>
		</div>
	);
}

PackageDetails.defaultProps = {
	title: 'lodash',
	github: 'https://github.com/lodash/lodash',
	npmLink: 'https://www.npmjs.com/package/lodash'
};

export default PackageDetails;