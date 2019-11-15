import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

const APP_ID = '43485e36';
const APP_KEY = 'a8182769089d2e1af9c49bf57de20a7e';

const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
;

  return (
    <div className="App">
     <form className="search-form">
         <input className="search-bar" type="text"/>
         <button className="search-button" type="submit">Search</button>
     </form>
    </div>
  );
};

export default App;
