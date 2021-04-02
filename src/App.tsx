import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';


import MainPage from "./Components/MainPage/MainPage";
import './App.css';


const App = () => {
    const history = createBrowserHistory();
  
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </Router>
        </>
    )

}

export default App;
