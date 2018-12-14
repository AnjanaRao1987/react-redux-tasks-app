import React, { Component } from 'react';




import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import Header from './components/Header';
import FourOhFour from "./components/FourOhFour";
import Tasks from "./container/Tasks";
import Edit from "./container/Edit";

const App = ({tasks}) => (
    <React.Fragment>
     <Header />
         <Switch>
            <Route exact path="/" render={ () => <Tasks tasks={ Object.values(tasks) } /> } />
            <Route exact path="/tasks/:id" render={ ({ match }) => (
                <Edit id={ +match.params.id } />
            )} />
         </Switch>
    </React.Fragment>
    );

export default App;
