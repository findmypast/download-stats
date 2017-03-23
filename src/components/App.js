import React from 'react';
import { Link } from 'react-router';
import s from '../styles/app.style';
import PackageDetails from './package-details';
import PackageDownloads from './package-downloads';

/* Reuse example
			<PackageDetails title="Lodash">
				<PackageDownloads packageName="lodash" />
				<PackageDownloads period="last-week" packageName="lodash" />
			</PackageDetails>

			<PackageDetails
      	github="https://github.com/facebook/react"
      	npmLink="https://www.npmjs.com/package/react" 
      	title="React">
      	<PackageDownloads packageName="react" />
      </PackageDetails>

      // try out children for downloads text
      <PackageDownloads packageName="react">Downloads in the last day: </PackageDownloads>
*/

function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Package download stats</h1>
      <nav style={s.mapMenu}>
        <Link to={homeRoute}>Home</Link>
      </nav>
      <PackageDetails />
    </div>
  );
}

export default App;
