import React from 'react';
import { Link } from 'react-router';
import s from '../styles/app.style';
import PackageDetails from './package-details';

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
