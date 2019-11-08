/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { useShareData } from './components/CustomHookStore/CustomHookStore';


function App() {
  const [userAuth] = useShareData({ userAuth: false });

  console.log(userAuth);

  return (
      <div className="App">
        {/* direct user to log in if not logged in */}
        {!userAuth.userAuth
          ? (
            <center>
              <Login />
            </center>
          ) : (
            <div>
              <Router>
                <Dashboard />
              </Router>
            </div>
          )}
      </div>
  );
}

export default App;
