import React from 'react';
import './App.css';


import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';


class App extends React.Component { 
 

  render(){
    return(
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/settings' component={Settings}/>
        </Switch>
      </div>
    )
  }
}

export default App;
