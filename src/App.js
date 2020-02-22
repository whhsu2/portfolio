import React from 'react';
import Home from './components/Home';
import projectList from './components/projectList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/projectList' component={projectList} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
