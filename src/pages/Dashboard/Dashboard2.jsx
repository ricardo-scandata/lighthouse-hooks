/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Drawer, AppBar, Toolbar, List, Typography, Divider,
  IconButton, Badge, Container, makeStyles, CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { SnackbarProvider } from 'notistack';
import MainListItems from '../../components/MainMenu/MainMenu';
import MainContainer from '../../components/MainContainer/MainContainer';
import ChipsArray from '../../components/Favorites/Favorites';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import Copyright from '../../components/Copyright/Copyright';
import useCloseMenuHook from '../../components/CustomHookStore/CustomHookStore';
import { UserProvider } from '../../components/CustomHookStore/ClassContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // root: {
  //     width: '100%',
  //     maxWidth: 360,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  //   nested: {
  //     paddingLeft: theme.spacing(4),
  //   },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 34, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: 10,
    marginLeft: -15,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    width: theme.spacing(1),
    flexGrow: 3,
    color: '#757575',
    // color: "#29A257",
    marginLeft: 30,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7.5), // controls how much spaces between drawer
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    width: 'flex',
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',

  },
  fixedHeight: {
    flexGrow: 1,
    height: 'flex', // change reportmenu height
  },
  toast: {
    backgroundColor: '#29A257',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);
  const [closeMenu, setCloseMenu] = useCloseMenuHook({ close: false });

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
    setCloseMenu({ close: false });
  };

  function handleDrawerClose() {
    setOpenDrawer(false);
    setCloseMenu({ close: true });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: '#2973A2' }}
        position="absolute"
        className={clsx(classes.appBar, openDrawer && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, openDrawer && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            SCANDATA
          </Typography>
          <IconButton color="inherit">
            <Badge
              badgeContent={4}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !openDrawer && classes.drawerPaperClose),
        }}
        open={openDrawer}
      >
        <div className={classes.toolbarIcon}>
          <Typography
            component="h1"
            variant="h6"
            className={classes.title}
          >
            Hella Fresh!
          </Typography>
          {/* <div> Main Menu </div> */}
          <IconButton button onClick={() => { handleDrawerClose(); }}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <UserProvider>
        <List onClick={handleDrawerOpen}>
          <MainListItems />
        </List>
        <Divider />
        <List onClick={handleDrawerOpen}>
          <SnackbarProvider
            autoHideDuration={2500}
            maxSnack={3}
            classes={{
              variantInfo: classes.toast,
            }}
          >
            <ChipsArray />
          </SnackbarProvider>
        </List>
        </UserProvider>
        <LogOutButton />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="flex" className={classes.container}>
          {' '}
          {/* controls the with of the overall screen on app */}
          <MainContainer />
          {/* <ReportContainer /> */}
          <Copyright />
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
