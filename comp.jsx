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
