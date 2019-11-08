import React from 'react';
import './Login.css';
import { styled, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import API from '../../utils/API';

const Blue = styled(Button)({
    background: '#2974a2',
});

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            submitted: false,
            currentUser: "", //value changed when successful login occurs
            game: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setLoginData = this.setLoginData.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            submitted: false,
        });
    }

    handleLogin(un, pw) {
        if (un.length > 0 && pw.length > 0) {
          const currentDate = new Date();
    
          API.authenticateUser({ "un": un, "pw": pw })
            .then(result => {
              console.log("Handle Login 2");
              if (result.data.token !== "" && new Date(result.data.expiration) > currentDate) {
                console.log("success - Handle Login 2a");
                this.setState({ userAuth: true, userName: un });
                sessionStorage.setItem("token", result.data.token);
                sessionStorage.setItem("token-expiration", result.data.expiration);
                return true;
              }
              else {
                console.log("fail - Handle Login 2b");
                this.setState({ userAuth: false, userName: "" });
                sessionStorage.setItem("token", "");
                sessionStorage.setItem("token-expiration", "");
                return false;
              }
            })
            .catch(err => console.log("User Auth Error Occurred: ", err));
          return false;
        }
    
        return false;
      }

    handleSubmit(event) {
        let success = this.props.handleLogin(this.state.username, this.state.password);
        if (success) {
            //successful login
            this.setState({
                currentUser: this.state.username,
                submitted: false,
            });
            this.setLoginData("", "");
        } else {
            //unsuccessful login
            setTimeout(
                function () {
                    this.setState({ submitted: true, });
                    this.reset();
                }
                    .bind(this),
                225
            );
        }
        if(this.state.username === "tekken" && this.state.password === "blake"){
                this.setState({ game: true, });
        }
        if (event !== undefined) {
            event.preventDefault();
        }
    }

    setLoginData(user, pass) {
        this.setState({
            username: user,
            password: pass,
            submitted: false,
        });
    }

    reset() {
        this.setState({
            username: "",
            password: "",
            currentUser: "",
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <br />
                <br />
                <div id="loginBody">
                    <div className="loginPane">
                        {this.state.game ? <iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe> :
                            <div id="login">  {/*render this before successful login*/}
                                <div id="title"><span>Log In</span></div>
                                <TextField label="Username" id="userInput" name="username" onChange={this.handleChange} type="text" value={this.state.username} />
                                <br />
                                <br />
                                <TextField label="Password" id="passInput" name="password" onChange={this.handleChange} type="password" value={this.state.password} />

                                {this.state.submitted ?
                                    <div id="errText"><span><i>Incorrect username or password.</i></span></div>
                                    : <div id="errTextHidden"><span>.</span></div>}

                                <Blue variant="contained" color="primary" id="logInButton" onClick={this.handleSubmit}>Log in</Blue>
                                <Button variant="contained" color="default" onClick={this.reset}>Cancel</Button>
                                <br />
                                <br />
                            </div>}
                    </div>
                    <br />
                    <div className="loginPane">
                        <div className="loginAltActionDiv">
                            <span className="loginAltAction">Forgot Login</span>
                            {/*don't use href!*/}
                            <span className="loginAltAction">Request Access</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Login;