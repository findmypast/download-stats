import React from 'react';
import { Link } from 'react-router';
import s from '../styles/app.style';

/* Create stateless component
-- Show Package Title, github link and npm link package
-- create one for `lodash` https://www.npmjs.com/package/lodash
-- props is an object in the first param
props = { title, github, npmLink }

function PackageDetails(props){ // React enforce capital for first charater
	return (
		<div>
			<h2>{props.title}</h2>
			<p>
				<a href={props.github}>Github</a> |&nbsp;
				<a href={props.npmLink}>NPM</a>
			</p>
		</div>
	);
}

PackageDetails.defaultProps = {
	title: 'lodash',
	github: 'https://github.com/lodash/lodash',
	npmLink: 'https://www.npmjs.com/package/lodash'
};

-- show props and destruct props
-- default props
-- import & export new component
*/

function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Package download stats</h1>
      <nav style={s.mapMenu}>
        <Link to={homeRoute}>Home</Link>
      </nav>
    </div>
  );
}

export default App;
