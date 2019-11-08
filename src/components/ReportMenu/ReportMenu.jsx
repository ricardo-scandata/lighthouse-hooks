import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles, ListItem, ListItemIcon,
  ListItemText, List, Checkbox,
} from '@material-ui/core';
import { default as MaterialLink } from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import API from '../../utils/API';
import { UserConsumer }  from '../CustomHookStore/ClassContext';

const styles = (theme) => ({
  link: {
    marginTop: theme.spacing(-1),
    padding: theme.spacing(0, 0, 0, 1),
    color: '#2973A2',
  },
  star: {
    color: '#29A257',
  },
});

class ReportMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      hasFavoriteError: false,
      reports: [],
      hasReportError: false,
    }
  }

  handleToggle = (value) => () => {
    const newChecked = this.state.checked;
    const currentId = newChecked.indexOf(value);
    console.log(newChecked)

    if (value.checked === 'true') {
      const newIndex = this.state.checked.findIndex((check) => check.ViewID === value.ViewID);

      console.log(newIndex);
      newChecked.splice(newIndex, 1);
      delete value.checked;
      this.patchFavorite(value.ViewID);
    } else if (!(this.state.checked.includes(value))) {
      newChecked.push(value);
      console.log(currentId);
      this.postNewFavorite(value.ViewID);
    }
    this.setState({ checked: newChecked });
    this.props.updateChecked(newChecked);
    console.log(newChecked)
  };

  postNewFavorite = (reportId) => {
    const favorites = [...this.state.checked];

    API.postUserFavorite(reportId)
      .then((res) => {
        console.log(res);
        this.setState({ checked: favorites });
      });
  };

  componentDidMount = () => {
    this.postNewFavorites();
  };

  // change function name to RemoveFavorite camelCase all functions
  patchFavorite = (reportId) => {
    API.patchUserFavorite(reportId)
      .then((res) => (res));
  };

  componentDidMount = () => {
    this.patchFavorites();
  };

  fetchUserFavs = () => {
    API.fetchUserFavorites()
      .then((res) => this.setState({ checked: res.data[0] }))
      .catch((err) => this.setState({ hasFavoriteError: err }));
    console.log('favorite data fetched')
    console.log(`error: ${this.state.hasFavoriteError}`);
  };

  fetchData = () => {
    API.fetchReports()
      .then((res) => this.setState({ reports: res.data }))
      .catch((err) => this.setState({ hasReportError: err }));
    console.log('report data fetched')
    console.log(`error: ${this.state.hasReportError}`);
  };

  componentDidMount = () => {
    this.fetchData();
    this.fetchUserFavs();
  };

  handleStar = () => {
    this.state.reports.map((report) => this.state.checked.forEach((favorite) => {
      if (favorite.ReportName === report.ReportName) {
        report.checked = 'true';
      }
    }));
    return this.state.reports
  };


  render() {
    const { classes } = this.props;
    const handleStar = this.handleStar();

    return (
      <List className={classes.root}>
         {/* <UserConsumer>
          {({ updateFavorites }) => (
            // updateFavorites({ checked: this.state.checked })
            <div>
              <button
                variant="contained"
                color="default"
                onClick={() => { updateFavorites({ checked: this.state.checked }); }}
              >
                test
          </button>
            </div>
          )}
        </UserConsumer> */}
        {handleStar.map((reportItem) => {
          const labelId = reportItem.ViewID;

          return (
            <ListItem key={reportItem} dense button>
              <ListItemIcon>
                <Checkbox
                  value={this.state.checked.indexOf(reportItem) !== -1}
                  onClick={this.handleToggle(reportItem)}
                  checkedIcon={<StarIcon className={classes.star} />}
                  icon={<StarBorder />}
                  checked={reportItem.checked}
                />
              </ListItemIcon>
              <Link to={{ pathname: 'Reports', state: { label: { labelId } } }}>
                <MaterialLink
                  className={classes.link}
                  component="button"
                  variant="body2"
                >
                  <ListItemText
                    id={labelId}
                    primary={reportItem.ReportName}
                  />
                </MaterialLink>
              </Link>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

ReportMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.array,
  updateChecked: PropTypes.func,
};

export default withStyles(styles)(ReportMenu);
