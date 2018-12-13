import React, { Component } from 'react';




import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import Header from './components/Header';
import FourOhFour from "./components/FourOhFour";
import Tasks from "./container/Tasks";

const App = ({tasks}) => (
    <React.Fragment>
     <Header />
         <Switch>
            <Route exact path="/" render={ () => <Tasks tasks={ Object.values(tasks) } /> } />
         </Switch>
    </React.Fragment>
    );

export default App;
