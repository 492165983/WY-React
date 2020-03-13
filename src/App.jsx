import React from 'react';
import  FooterGuide from './components/footerGuide/index'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routers from './config/routers.js'


function App() {
  return (
    <Router>
        <Switch>
          {routers.map(menu => <Route {...menu} key={menu.path} />)}
        </Switch>
        <Route path='/' component={FooterGuide} />
        <Redirect from='/' to='/home' />
      </Router>
  );
}

export default App;
