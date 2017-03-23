import React from 'react';

function PackageDetails({children, title, github, npmLink}){ // React enforce capital for first charater
	return (
		<div>
			<h2>{title}</h2>
			<p>
				<a href={github}>Github</a> |&nbsp;
				<a href={npmLink}>NPM</a>
			</p>
			{children}
		</div>
	);
}

PackageDetails.defaultProps = {
	title: 'lodash',
	github: 'https://github.com/lodash/lodash',
	npmLink: 'https://www.npmjs.com/package/lodash'
};

export default PackageDetails;