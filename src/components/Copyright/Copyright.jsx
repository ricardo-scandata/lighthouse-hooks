/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Typography, Link } from '@material-ui/core';

class Copyright extends React.Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://scandata.com//" target="_blank">
          ScanData
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
}

export default Copyright;
