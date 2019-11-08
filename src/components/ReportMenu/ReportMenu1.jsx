/* eslint-disable import/no-named-default */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles, ListItem, ListItemIcon,
  ListItemText, List, Checkbox,
} from '@material-ui/core';
import { default as MaterialLink } from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { useCustomHook } from '../CustomHookStore/CustomHookStore';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing(-1),
    padding: theme.spacing(0, 0, 0, 1),
    color: '#2973A2',
  },
  star: {
    color: '#29A257',
  },
}));

function ReportMenu() {
  const classes = useStyles();
  const [checked, setChecked] = useCustomHook([]);
  const [hasFavError, setFavError] = useState(false);
  const [reports, setReports] = useState([]);
  const [hasErrors, setErrors] = useState(false);

  const handleToggle = (value) => () => {
    const newChecked = [...checked];
    const currentId = newChecked.indexOf(value);

    if (value.checked === 'true') {
      const newIndex = checked.findIndex((check) => check.ViewID === value.ViewID);

      console.log(newIndex);
      newChecked.splice(newIndex, 1);
      delete value.checked;
      patchFavorite(value.ViewID);
    } else if (!(checked.includes(value))) {
      newChecked.push(value);
      console.log(currentId);
      postNewFavorite(value.ViewID);
    }
    setChecked(newChecked);
  };

  async function postNewFavorite(reportId) {
    const favorites = [...checked];

    await API.postUserFavorite(reportId)
      .then((res) => console.log(res), setChecked(favorites));
  }

  useEffect(() => {
    postNewFavorite();
  }, []);

  async function patchFavorite(reportId) {
    await API.patchUserFavorite(reportId)
      .then((res) => (res));
  }

  useEffect(() => {
    patchFavorite();
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

  async function fetchData() {
    await API.fetchReports()
      .then((res) => setReports(res.data))
      .catch((err) => setErrors(err));
    console.log(`error: ${hasErrors}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleStar() {
    reports.map((report) => checked.forEach((favorite) => {
      if (favorite.ReportName === report.ReportName) {
        report.checked = 'true';
      }
    }));
    return reports;
  }

  return (
    <List className={classes.root}>
      {handleStar().map((reportItem) => {
        const labelId = reportItem.ViewID;

        return (
          <ListItem key={reportItem} dense button>
            <ListItemIcon>
              <Checkbox
                value={checked.indexOf(reportItem) !== -1}
                onClick={handleToggle(reportItem)}
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

export default ReportMenu;
