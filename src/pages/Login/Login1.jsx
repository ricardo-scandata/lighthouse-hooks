/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Login.css';
import { styled } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import API from '../../utils/API';
import { useShareData } from '../../components/CustomHookStore/CustomHookStore';

const Blue = styled(Button)({
  background: '#2974a2',
});

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [submitted, setSubmit] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [game, setGame] = useState();
  const [userAuth, setUserAuth] = useShareData();
  const [userName, setUser] = useState();
  const [login, setLogin] = useState({
    settings: [],
    permissions: [],
    userName: 1,
  });

  console.log(userAuth);
  const currentDate = new Date();
  const token = sessionStorage.getItem('token');
  const tokenExpiration = sessionStorage.getItem('token-expiration');

  function handleLogin(event) {
    fetchUser(username, password);
    if (userAuth.userAuth) {
      console.log(userAuth);
      setCurrentUser(username);
      setSubmit(false);
      setUserName('');
      setPassword('');
    } else {
      setSubmit(true);
      reset();
    }
    if (username === 'tekken' && password === 'blake') {
      setGame(true);
    }
    if (event !== undefined) {
      event.preventDefault();
    }
  }

  async function fetchUser(un, pw) {
    console.log(username, password);
    // const currentDate = new Date();

    await API.authenticateUser({ un, pw })
      .then((result) => {
        console.log('Handle Login 2');
        console.log(result);
        if (result.data.token !== '' && new Date(result.data.expiration) > currentDate) {
          console.log('success - Handle Login 2a');
          setUserAuth({ userAuth: true });
          setUser(un);
          sessionStorage.setItem('token', result.data.token);
          sessionStorage.setItem('token-expiration', result.data.expiration);
          return true;
        }
        console.log('fail - Handle Login 2b');
        setUserAuth({ userAuth: false });
        setUser('');
        sessionStorage.setItem('token', '');
        sessionStorage.setItem('token-expiration', '');
        return false;
      })
      .catch((err) => console.log('User Auth Error Occurred: ', err));
    return false;
  }
  useEffect(() => {
    handleLogin();
  }, []);

  function reset() {
    setUserName('');
    setPassword('');
    setCurrentUser('');
    console.log(username);
  }

  useEffect(() => {
    // this is to log out the user after end of day
    if (token !== '' && token !== null && new Date(tokenExpiration) > currentDate) {
      setUserAuth({ userAuth: true });
      updateToken();
    } else {
      setUserAuth({ userAuth: false });
    }
  }, []);

  async function updateToken() {
    if (login.userName !== '' && (login.userName !== null && login.userName.length > 0)) {
      await API.validateUserToken(login.userName, tokenExpiration, token)
        .then((result) => {
          console.log(result);
          sessionStorage.setItem('token', result.data.token);
          sessionStorage.setItem('token-expiration', result.data.expiration);

          return 'OK';
        })
        .catch((err) => console.log('Update Token Error Occurred: ', err));
    }
  }
  useEffect(() => {
    updateToken();
  }, []);

  return (
    <>
      <Header />
      <br />
      <br />
      <div id="loginBody">
        <div className="loginPane">
          {game ? (
            <iframe
              title="Intentionally blank"
              src="https://www.retrogames.cc/embed/40238-tekken-3.html"
              width="600"
              height="450"
              frameBorder="no"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              scrolling="no"
            />
          )
            : (
              <div id="login">
                {/* render this before successful login */}
                <div id="title"><span>Log In</span></div>
                <TextField
                  label="Username"
                  id="userInput"
                  name="username"
                  onChange={(event) => setUserName(event.target.value)}
                  type="email"
                  autoComplete="current-password"
                  value={username}
                  margin="normal"
                />
                <br />
                <br />
                <TextField
                  label="Password"
                  id="passInput"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  value={password}
                />
                {!submitted
                  ? <div id="errText"><span><i>Incorrect username or password.</i></span></div>
                  : <div id="errTextHidden"><span>.</span></div>}

                <Blue
                  variant="contained"
                  type="submit"
                  onClick={() => { handleLogin(); }}
                >
                  Log in
                </Blue>
                <Button
                  variant="contained"
                  color="default"
                  onClick={() => { reset(); }}
                >
                  Cancel
                </Button>
                <br />
                <br />
              </div>
            )}
        </div>
        <br />
        <div className="loginPane">
          <div className="loginAltActionDiv">
            <span className="loginAltAction">Forgot Login</span>
            {/* don't use href! */}
            <span className="loginAltAction">Request Access</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
