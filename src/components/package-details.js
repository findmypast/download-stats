import React from 'react';
import PackageDownloads from './package-downloads';

/* Show use of children feature
- tight coupling between PackageDownloads and PackageDetails.
- It won't make sense to have another package downloads wrapped inside
example: <PackageDownloads packageName="react" />
- {children}
*/

function PackageDetails({children, title, github, npmLink}){ // React enforce capital for first charater
	return (
		<div>
			<h2>{title}</h2>
			<p>
				<a href={github}>Github</a> |&nbsp;
				<a href={npmLink}>NPM</a>
			</p>
			<PackageDownloads />
		</div>
	);
}

PackageDetails.defaultProps = {
	title: 'lodash',
	github: 'https://github.com/lodash/lodash',
	npmLink: 'https://www.npmjs.com/package/lodash'
};

export default PackageDetails;