import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    //Chnged that App to app cause we are going to follow somthing called BEM
    <div className="app">
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
