import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReportContainer from '../components/ReportContainer'

const useStyles = makeStyles(theme => ({
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

export default function Reports() {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            {/* ReportContainer has router to all reports */}
            <Grid item xs zeroMinWidth lg>
                <Paper className={classes.paper}>
                    <ReportContainer />
                </Paper>
            </Grid>
        </Grid>
    );
}


