/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Title(props) {
  return (
    <Typography align="left" color="#2973A2" component="h2" variant="h6" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
