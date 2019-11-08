/* eslint-disable class-methods-use-this */
/* eslint-disable global-require */
import React from 'react';
import './Header.css';

class Header extends React.Component {
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <div id="header">
        <br />
        <input type="image" src={require('../../assets/img/logo.png')} alt="Refresh" onClick={this.reload} />
        <br />
        <br />
      </div>
    );
  }
}

export default Header;
