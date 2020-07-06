import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message_1 = "IPv4 Conversations / Filter:<No Filter"
const message_2 = "Total Frames: 62393";
const message_3 = "Total Bytes: 89805838";
const message_4 = "Total Duration: 29608ms";
const message_5 = "From: whatsapp-cdn-shv-01-scl2.fbcdn.ne";
const message_6 = "To: host.docker.internal"; 

export default function Result_text() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid>
            <Avatar>ATS</Avatar>
          </Grid>
          <Grid>
            <Typography>
                {message_1}
                <br></br>
                {message_2}
                <br></br>
                {message_3}
                <br></br>
                {message_4}
                <br></br>
                {message_5}
                <br></br>
                {message_6}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
