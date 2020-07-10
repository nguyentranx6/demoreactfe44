import React from 'react';
import './App.css';
import Header from "./component/header";

function App(props) {
  return (
    <div className="App">
        {props.text}
        <Header text={'abc'}></Header>
    </div>
  );
}

export default App;
