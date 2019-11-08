/* eslint-disable no-unused-vars */
import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {
  makeStyles, ListItemIcon, ListItemText, ListItem,
} from '@material-ui/core';
import { useShareData } from '../CustomHookStore/CustomHookStore';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 360,
    marginTop: 'flex',
    padding: theme.spacing(2, 0, 0, 0),
    // marginBottom: theme.spacing(100),

  },
  icon: {
    color: '#4F606B',
    marginLeft: theme.spacing(0.7),
    // marginBottom: theme.spacing()
  },
  text: {
    marginTop: theme.spacing(0.6),
    marginRight: theme.spacing(9),
    padding: theme.spacing(0, 0, 0, -2),
    color: '#757575',
  },
}));

function LogOutButton() {
  const classes = useStyles();
  const [userAuth, setUserAuth] = useShareData();

  function handleLogout() {
    setUserAuth({ userAuth: false });
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('token-expiration', '');
    console.log('Handle Logout');
  }

  return (
    <div className={classes.root}>
      <ListItem button onClick={() => { handleLogout(); }}>
        <ListItemIcon>
          <ExitToAppOutlinedIcon
            className={classes.icon}
            fontSize="small"
          />
        </ListItemIcon>
        <ListItemText
          primary="Logout"
          className={classes.text}
        />
      </ListItem>
    </div>
  );
}

export default LogOutButton;
