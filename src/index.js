import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StateCovidTracker from './covidTracker/StateCovidTracker';      

ReactDom.render(<StateCovidTracker/>
    ,document.getElementById("root"));