import React from 'react';
import './App.css';
import Header from "./component/header";
import {Demo} from "./component/DemoComponent/demo";
import {Haoga} from "./component/DemoComponent/Haoga";
import BaiTapLayout from "./component/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";

function App(props) {

  return (
    <div>
      <DataBinding />

    </div>
  );
}

export default App;
