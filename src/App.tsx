import './App.css';
import React from 'react';
import Dashboard from './pages/Dashboard/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// pages url
const PAGES = {
  ROOT: '/',
};

// pages components
const ROUTES = [
  {
    path: PAGES.ROOT,
    element: <Dashboard/>,
  },
];

/**
* @description <App page with routes to all pages>
* @author <ibtihal el maghraoui>
*/
const App: React.FC = (): JSX.Element => {
  return (
      <Router>
        <Routes>
         {ROUTES.map((props, idx) => (
            <Route key={idx} {...props} />
          ))} 
        </Routes>
      </Router>
);
}

export default App;
