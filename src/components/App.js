import React from 'react';
import { Link } from 'react-router';
import s from '../styles/app.style';

//basic stateless component
function App() {
	/* all jsx must be wrapped in a single node
	return (
	<div>something</div>
	<p>other</p>
	)
	*/
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
