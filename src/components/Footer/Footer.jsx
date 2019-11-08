/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="footerContent">
          <span><b>ScanData Systems</b></span>
          <br />
          <span>
            <i>(512) 358-1585 x300</i>
            {' '}
            |
            {' '}
          </span>
          <span><i>9701 Brodie Lane, Bldg. 104, Austin, TX 78748</i></span>
          <br />
          <span><i>&copy; Copyright 2019. All Rights Reserved.</i></span>
          <br />
        </div>
      </div>
    );
  }
}

export default Footer;
