import React from 'react';
import './App.css';
import Main from "./Components/Main"
import Employees from "./Components/Employees"
import Header from "./Components/Header"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({ basename: process.env.CONTEXT });

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/employees" component={Employees} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
