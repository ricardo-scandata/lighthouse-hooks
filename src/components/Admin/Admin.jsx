/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Typography from '@material-ui/core/Typography';

class Admin extends React.Component {
  render() {
    return (
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {' '}
        Admin Page
      </Typography>
    );
  }
}

export default Admin;
