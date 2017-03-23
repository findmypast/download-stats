import React from 'react';
import { Link } from 'react-router';
import s from '../styles/app.style';
import PackageDetails from './package-details';
import PackageDownloads from './package-downloads';

function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Package download stats</h1>
      <nav style={s.mapMenu}>
        <Link to={homeRoute}>Home</Link>
      </nav>
      <PackageDetails title="Lodash">
				<PackageDownloads packageName="lodash">
      	Downloads in the last day
      	</PackageDownloads>
				<PackageDownloads period="last-week" packageName="lodash">
				Downloads in the last week
				</PackageDownloads>
			</PackageDetails>

			<PackageDetails
      	github="https://github.com/facebook/react"
      	npmLink="https://www.npmjs.com/package/react" 
      	title="React">
      	<PackageDownloads packageName="react">
      	Downloads in the last day
      	</PackageDownloads>
      	<PackageDownloads period="last-week" packageName="react">
				Downloads in the last week
				</PackageDownloads>
      </PackageDetails>
    </div>
  );
}

export default App;
