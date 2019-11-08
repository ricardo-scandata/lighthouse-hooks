/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import Title from '../Title/Title';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    color: '#2973A2',
  },
}));

function ReportApi(props) {
  const classes = useStyles();
  const [report, setReport] = useState([]);
  const [hasError, setError] = useState(false);
  const reportLabel = props.location.state;
  const reportId = reportLabel.label.labelId;

  async function fetchReport() {
    await API.fetchSingleReport(reportId)
      .then((res) => setReport(res.data))
      .catch((err) => setError(err));
    console.log(`error: ${hasError}`);
  }
  useEffect(() => {
    fetchReport();
  }, []);

  const titles = [];
  const titleList = () => {
    for (const name in report[0]) {
      titles.push(name);
    }
    return titles;
  };

  const reportArray = [];
  const reportBody = () => {
    // we can write an if statement blocking id
    for (let i = 0; i < report.length; i++) {
      const tabCell = [];

      reportArray.push(tabCell);
      for (const key in report[i]) {
        tabCell.push(<TableCell>{report[i][key]}</TableCell>);
      }
    }
    return reportArray;
  };

  return (
    // eslint-disable-next-line react/jsx-fragments
    <React.Fragment>
      <Title>Report Title</Title>
      <Table size="Medium">

        <TableHead>
          <TableRow>
            {titleList().map((title) => (
              <TableCell key={title.ViewID}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {reportBody().map((body) => (
            <TableRow key={body.ViewID}>
              {body}
            </TableRow>
          ))}
        </TableBody>

      </Table>
      <div className={classes.seeMore}>
        <Link className={classes.seeMore} href="none">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ReportApi;
