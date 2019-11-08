/* eslint-disable import/no-named-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles, Chip, ListSubheader, List, ListItem, 
  ListItemIcon, button
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { default as MaterialLink } from '@material-ui/core/Link';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import API from '../../utils/API';
import { UserConsumer } from '../CustomHookStore/ClassContext';
// import {MessageContext} from '../ReportMenu/ReportMenu'

const styles = (theme) => ({
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
  listItemDashBoard: {
    clickableColorPrimary: red[800],
  },
  header: {
    marginRight: theme.spacing(5.5),
  },
  toast: {
    backgroundColor: '#29A257',
  },
});

class ChipsArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      hasFavoriteError: false,
      reports: [],
      hasReportError: false,
    }
  }
 
  handleMessage = (message, data) => {
    console.log(data);
    this.props.enqueueSnackbar(message, { variant: 'info' });
    this.handleDelete(data);
  };
  
  static contextType = UserConsumer;

  handleDelete = (chipToDelete) => {
    const newChecked = [...this.state.checked];
    const currentIndex = newChecked.indexOf(chipToDelete);

    newChecked.splice(currentIndex, 1);
    delete chipToDelete.checked;
    this.patchFavorite(chipToDelete.ViewID);
    this.setState({ checked: newChecked });
    this.updateFavorites({checked: newChecked})
  };

  patchFavorite = (reportId) => {
    API.patchUserFavorite(reportId)
      .then((res) => console.log(res));
  }

  componentDidMount = () => {
    this.patchFavorites();
  };

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

  render() {
    const { classes } = this.props;
    const favorites = this.favorites();
    return (
      <List>
        <ListSubheader inset className={classes.header}>Saved reports</ListSubheader>
        {favorites.map((data) => {
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
        {/* <UserConsumer>
          {({ favorites }) =>
            <div>
              <div> {favorites.checked.map((data) => {
                return(
                <Chip
                  style={{ cursor: 'pointer' }}
      
                  size="small"
                
                  label={data.ReportName}
                  color="primary"
                  className={classes.chip}
                />
                )})} </div>
            </div>
          }
        </UserConsumer> */}
      </List>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withStyles(styles)(
  withSnackbar(ChipsArray),
);
