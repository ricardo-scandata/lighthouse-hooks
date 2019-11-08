/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-default */
import React from 'react';
import {
  ListItem, ListItemIcon, ListItemText, ListSubheader,
  Chip, List, withStyles, Collapse, Divider,
} from '@material-ui/core';
import { default as MaterialLink } from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarBorder from '@material-ui/icons/StarBorder';
import { UserConsumer } from '../CustomHookStore/ClassContext';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useCustomHook } from '../CustomHookStore/CustomHookStore';
import useCloseMenuHook from '../CustomHookStore/CustomHookStore';
import ReportMenu from '../ReportMenu/ReportMenu';
import API from '../../utils/API';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  dashBoardLink: {
    // paddingLeft: theme.spacing(4),
    padding: theme.spacing(1, 0, 0, 4),
  },
  listItemDashBoard: {
    fontSize: '15px',
  },
  seeMore: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(9),
    padding: theme.spacing(0, 0, 0, 1),
    color: '#757575',
  },
  adminColor: { color: '#4F606B' },
  reportsColor: { color: '#4F606B' },
  customersColor: { color: '#4F606B' },
  seeMore3: {
    marginTop: theme.spacing(-1),
    marginRight: theme.spacing(9),
    // padding: theme.spacing(0, 0, 0, 1),
    color: '#2973A2',
  },
  seeLess: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(0, 0, 0, -1),
    // color: '#2973A2',
  },
  dashBoardIcon: {
    // paddingRight: theme.spacing(.5)
  },
  link: {
    // display: 'flex',
    //   justifyContent: 'center',
    // flexWrap: 'wrap',
    padding: theme.spacing(-1),
    underline: 'none',
  },
  chip: {
    marginLeft: theme.spacing(-1.5),
    background: '#2973A2',
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2),
    width: theme.spacing(17),
    '&:hover': {
      background: '#29A257',
    },
    backgroundRepeat: '#29A257',
    margin: theme.spacing(0.5),
  },
  icon: {
    margin: theme.spacing(0.5),
    color: '#4F606B',
    marginLeft: theme.spacing(0.2),
    marginRight: theme.spacing(0.2),
    // padding: theme.spacing(-10),
    // width: theme.spacing(20),
  },
  fab: {
    color: '#757575',
    '&:hover': {
      color: red[800],
    },
    // fontSize: '23px',
    marginLeft: theme.spacing(-0.6),
    marginBottom: theme.spacing(0.18),
    // width: 22,
    // height: 23,
    // margin: theme.spacing(.5),
  },
  header: {
    marginRight: theme.spacing(5.5),
  },
  toast: {
    backgroundColor: '#29A257',
  },
});

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      hasFavoriteError: false,
      reports: [],
      hasReportError: false,
      open: false,
      open1: false,
      open2: false,
      closeMenu: props.closeMenu,
    }
  }

  updateChecked = (value) => {
    this.setState({ checked: value })
  }

  handleMessage = (message, data) => {
    console.log(data);
    this.props.enqueueSnackbar(message, { variant: 'info' });
    this.handleDelete(data);
  };

  handleDelete = (chipToDelete) => {
    const newChecked = [...this.state.checked];
    const currentIndex = newChecked.indexOf(chipToDelete);

    newChecked.splice(currentIndex, 1);
    delete chipToDelete.checked;
    this.patchFavorite(chipToDelete.ViewID);
    this.setState({ checked: newChecked });
    // this.updateFavorites({ checked: newChecked })
  };

  patchFavorite = (reportId) => {
    API.patchUserFavorite(reportId)
      .then((res) => console.log(res));
  }

  fetchData = () => {
    API.fetchReports()
      .then((res) => this.setState({ reports: res.data }))
      .catch((err) => this.setState({ hasReportError: err }));
    console.log(`error: ${this.state.hasReportError}`);
  }

  fetchUserFavs = () => {
    API.fetchUserFavorites()
      .then((res) => this.setState({ checked: res.data[0] }))
      .catch((err) => this.setState({ hasFavoriteError: err }));
    console.log(`error: ${this.state.hasFavoriteError}`);
  }

  componentDidMount = () => {
    this.fetchData();
    this.fetchUserFavs();
  };

  favorites = () => {
    const finalArray = [];

    this.state.reports.forEach((report) => this.state.checked.forEach((favorite) => {
      if (favorite.ReportName === report.ReportName) {
        finalArray.push(favorite);
        API.updateFavorites(favorite)
      }
    }));
    return finalArray;
  };

  handleClick = () => {
    if (this.state.open === false) {
      this.setState({ open: true });
      console.log(this.state.closeMenu);
    } else {
      this.setState({ open: false })
    }
    this.setState({ open1: false });
    this.setState({ open2: false });
  };
 
  handleClick2 = () => {
    if (this.state.open1 === false) {
      this.setState({ open1: true });
    } else {
      this.setState({ open1: false })
    }
    this.setState({ open: false });
    this.setState({ open2: false });
  };

  handleClick3 = () => {
    if (this.state.open2 === false) {
      this.setState({ open2: true });
    } else {
      this.setState({ open2: false })
    }
    this.setState({ open1: false });
    this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.closeMenu === true) {
      this.setState({ open: false });
      this.setState({ open1: false });
      this.setState({ open2: false });
      console.log(this.state.closeMenu);
    }
  }

  render() {
    const { classes } = this.props;
    const favorites = this.favorites();
    
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <PeopleIcon className={classes.adminColor} />
          </ListItemIcon>
          <MaterialLink
            className={classes.seeMore}
            component="button"
            underline="none"
          >
            <ListItemText primary="Admin" />
          </MaterialLink>
          {/* {open ? <ExpandLess className={classes.seeLess} />
       : <ExpandMore className={classes.seeLess} />} */}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem dense button className={classes.dashBoardLink}>
              <ListItemIcon>
                {/* <DashboardIcon /> */}
                <LayersIcon className={classes.dashBoardIcon} />
              </ListItemIcon>
              <Link to="/Admin">
                <MaterialLink
                  className={classes.seeMore3}
                  component="button"
                  variant="body2"
                // underline="none"
                >
                  <ListItemText primary="Admin" classes={{ primary: classes.listItemDashBoard }} />
                </MaterialLink>
              </Link>
            </ListItem>

          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick2}>
          <ListItemIcon>
            <InboxIcon className={classes.reportsColor} />
          </ListItemIcon>
          <MaterialLink
            className={classes.seeMore}
            component="button"
            underline="none"
          >
            <ListItemText primary="Reports" />
            {/* {open1 ? <ExpandLess /> : <ExpandMore />} */}
          </MaterialLink>
        </ListItem>
        <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ReportMenu 
            checked={this.state.checked}
            updateChecked={this.updateChecked}
            />
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick3}>
          <ListItemIcon>
            <LoyaltyIcon className={classes.customersColor} />
          </ListItemIcon>
          <Link to="none">
            <MaterialLink
              className={classes.seeMore}
              component="button"
              underline="none"
            >
              <ListItemText primary="Customers" />
            </MaterialLink>
          </Link>
          {/* {open ? <ExpandLess className={classes.seeLess} />
      : <ExpandMore className={classes.seeLess} />} */}
        </ListItem>
        <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListSubheader inset className={classes.header}>Saved reports</ListSubheader>
        {this.state.checked.map((data) => {
          let icon;

          if (data.name === 'React') {
            icon = <TagFacesIcon />;
          }
          const labelId = data.ViewID;

          return (
            <div>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon className={classes.icon} />
                </ListItemIcon>
                <Link to={{ pathname: 'Reports', state: { label: { labelId } } }}>
                  <MaterialLink
                    button
                    className={classes.link}
                    component="button"
                    variant="body2"
                    underline="none"
                  >
                    <Chip
                      style={{ cursor: 'pointer' }}
                      key={labelId}
                      size="small"
                      icon={icon}
                      label={data.ReportName}
                      color="primary"
                      className={classes.chip}
                    // onDelete={handleDelete(data)}
                    // deleteIcon={ <HighlightOffOutlinedIcon className={classes.fab} />}
                    />
                  </MaterialLink>
                </Link>
                <DeleteOutlinedIcon
                  className={classes.fab}
                  onClick={() => this.handleMessage(`${data.ReportName} was removed from Favorites`, data)}
                  style={{ cursor: 'pointer' }}
                />
              </ListItem>
            </div>
          );
        })}
      </div>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  closeMenu: PropTypes.bool,
};

export default withStyles(styles)(
  withSnackbar(MainMenu),
);
