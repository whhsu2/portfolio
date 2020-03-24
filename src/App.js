import React from 'react';
import Home from './components/Home';
import projectList from './components/projectList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/projectList' component={projectList} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
