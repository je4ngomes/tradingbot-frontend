import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route } from 'react-router-dom'

import './assets/css/App.css';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route path='/dashboard' component={DashboardPage} />
            </Switch>
        </Router>       
    </div>
  );
}

export default App;
