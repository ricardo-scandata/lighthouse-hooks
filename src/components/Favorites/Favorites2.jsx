/* eslint-disable import/no-named-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles, Chip, ListSubheader, List, ListItem, ListItemIcon,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { default as MaterialLink } from '@material-ui/core/Link';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useCustomHook } from '../CustomHookStore/CustomHookStore';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  link: {
    // display: 'flex',
    // justifyContent: 'center',
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
}));

function ChipsArrayClone() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [checked, setChecked] = useCustomHook([]);
  const [hasFavError, setFavError] = useState(false);
  const [reports, setReports] = useState([]);
  const [hasErrors, setErrors] = useState(false);

  const handleMessage = (message, data) => {
    console.log(data);
    enqueueSnackbar(message, { variant: 'info' });
    handleDelete(data);
  };

  const handleDelete = (chipToDelete) => {
    const currentIndex = checked.indexOf(chipToDelete);
    const newChecked = [...checked];

    newChecked.splice(currentIndex, 1);
    delete chipToDelete.checked;
    patchFavorite(chipToDelete.ViewID);
    setChecked(newChecked);
  };

  async function patchFavorite(reportId) {
    await API.patchUserFavorite(reportId)
      .then((res) => console.log(res));
  }

  useEffect(() => {
    patchFavorite();
  }, []);


  async function fetchData() {
    await API.fetchReports()
      // await API.getAllReports
      .then((res) => setReports(res.data))
      .catch((err) => setErrors(err));
    console.log(`error: ${hasErrors}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchUserFavs() {
    await API.fetchUserFavorites()
      .then((res) => setChecked(res.data[0]))
      .catch((err) => setFavError(err));
    console.log(`error: ${hasFavError}`);
  }

  useEffect(() => {
    fetchUserFavs();
  }, []);

  function favorites() {
    const finalArray = [];

    reports.forEach((report) => checked.forEach((favorite) => {
      if (favorite.ReportName === report.ReportName) {
        finalArray.push(favorite);
      }
    }));
    return finalArray;
  }

  return (
    <List>
      <ListSubheader inset className={classes.header}>Saved reports</ListSubheader>
      {favorites().map((data) => {
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
                onClick={() => handleMessage(`${data.ReportName} was removed from Favorites`, data)}
                style={{ cursor: 'pointer' }}
              />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}

function ChipsArray() {
  const classes = useStyles();

  return (
    <SnackbarProvider
      autoHideDuration={2500}
      maxSnack={3}
      classes={{
        variantInfo: classes.toast,
      }}
    >
      <ChipsArrayClone />
    </SnackbarProvider>
  );
}
export default ChipsArray;
