import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tasks from "./container/Tasks";


import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";


import Header from './components/Header';

const App = ({tasks}) => (
    <React.Fragment>
     <Header />
         <Switch>
            <Route exact path="/" render={ () => <Tasks tasks={ Object.values(tasks) } /> } />
         </Switch>
    </React.Fragment>
    )

// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>
//             <Header />
            
//         </React.Fragment>
//     );
//   }
// }

export default App;
