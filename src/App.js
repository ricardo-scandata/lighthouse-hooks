/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Login from './pages/Login/Login';
import Button from '@material-ui/core/Button';
import Login from './pages/Login/Login';
import API from './utils/API';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      settings: [],
      permissions: [],
      userName: 1,
      userAuth: false,
    };

    // useEffect(() => {
    // }, []);

    this.componentWillMount = () => {
      const token = sessionStorage.getItem('token');
      const tokenExpiration = sessionStorage.getItem('token-expiration');
      const currentDate = new Date();

      if (token !== '' && token !== null && new Date(tokenExpiration) > currentDate) {
        this.setState({ userAuth: true });
      }
      else {
        this.setState({ userAuth: false });
      }
    };

    this.updateToken = (userName, expiration, token) => {
      if (userName !== '' && (userName !== null && userName.length > 0)) {
        API.validateUserToken(userName, expiration, token)
          .then((result) => {
            sessionStorage.setItem('token', result.data.token);
            sessionStorage.setItem('token-expiration', result.data.expiration);

            return 'OK';
          })
          .catch((err) => console.log('Update Token Error Occurred: ', err));
      }
    };
  }

  handleLogout() {
    console.log('Handle Logout');
    this.setState({ userAuth: false, userName: '' });
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('token-expiration', '');
  }

  handleLogin(un, pw) {
    if (un.length > 0 && pw.length > 0) {
      const currentDate = new Date();

      API.authenticateUser({ un, pw })
        .then((result) => {
          console.log('Handle Login 2');
          if (result.data.token !== '' && new Date(result.data.expiration) > currentDate) {
            console.log('success - Handle Login 2a');
            this.setState({ userAuth: true, userName: un });
            sessionStorage.setItem('token', result.data.token);
            sessionStorage.setItem('token-expiration', result.data.expiration);
            return true;
          }
          console.log('fail - Handle Login 2b');
          this.setState({ userAuth: false, userName: '' });
          sessionStorage.setItem('token', '');
          sessionStorage.setItem('token-expiration', '');
          return false;
        })
        .catch((err) => console.log('User Auth Error Occurred: ', err));
      return false;
    }

    return false;
  }

  render() {
    return (
      <div className="App">
        <center>
          {/* direct user to log in if not logged in */}
          {!this.state.userAuth
            ? <Login handleLogin={this.handleLogin} />
            : (
              <div>
                <Router>
                  <Dashboard />
                </Router>
                {/* <h1>Dashboard</h1> */}
                <Button variant="contained" color="default" onClick={this.handleLogout}>Logout</Button>
              </div>
            )}
        </center>
      </div>
    );
  }
}

export default App;
