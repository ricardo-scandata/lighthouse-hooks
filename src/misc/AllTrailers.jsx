/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// eslint-disable-next-line import/no-unresolved
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    color: '#2973A2',
  },
}));

const AllTrailers = () => {
  const classes = useStyles();

  const [hasError, setErrors] = useState(false);
  const [report, setReport] = useState([])

  async function fetchData() {
    const res = await fetch('https://api.myjson.com/bins/dhcq5');

    console.log(`Has Error: ${hasError}`)
    console.log(res);
    res
      .json()
      .then((res) => setReport(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Title>All Trailers</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Distribution Center</TableCell>
            <TableCell>Trailer Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Unit Count</TableCell>
            <TableCell align="left">Trailer Carrier</TableCell>
            <TableCell align="left">Date Created</TableCell>
            <TableCell align="left">Date Shipped</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {report.map((row) => (
            <TableRow key={row.DistributionCenter}>
              <TableCell>{row.DistributionCenter}</TableCell>
              <TableCell>{row.TrailerNumber}</TableCell>
              <TableCell >{row.Status}</TableCell>
              <TableCell>{row.UnitCount}</TableCell>
              <TableCell align="left">{row.TrailersCarrier}</TableCell>
              <TableCell align="left">{row.DateCreated}</TableCell>
              <TableCell align="left">{row.DateShipped}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link className={classes.seeMore} href="">
          See more orders
        </Link>
      </div>
    </>
  );
}

export default AllTrailers;