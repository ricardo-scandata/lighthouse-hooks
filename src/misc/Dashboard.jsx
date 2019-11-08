import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from '../components/MainMenu';
import MainContainer from './MainContainer';
import ChipsArray from '../components/Favorites'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://scandata.com//" target="_blank">
                ScanData
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
        color: "#757575",
        marginLeft: 50,
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
            width: theme.spacing(7.5), //controls how much spaces between drawer 
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
        height: 'flex', //change reportmenu height
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(true);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
 
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
                        noWrap className={classes.title}
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
                        // component="h1"
                        variant="h6"
                        // color="#757575"
                        className={classes.title}
                    >
                        Hella Fresh!
                     </Typography>
                    {/* <div> Main Menu </div> */}
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List  onClick={handleDrawerOpen} >{MainListItems(openDrawer)}</List>
                <Divider />
                <List onClick={handleDrawerOpen}><ChipsArray/></List>
                    
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="flex" className={classes.container}> {/* controls the with of the overall screen on app*/}
                    <MainContainer />
                    <Copyright />
               
                </Container>
                
            </main>
        </div>
    );
}