import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LoginForm from './loginForm'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Management
                </Typography>
                </Toolbar>
            </AppBar>
                <Grid 
                container
                spacing={3}
                direction='row'
                justify="flex-start"
                alignItems="center" 
                item xs={12}>
                    <Grid  xs={4} item></Grid>
                    <Grid  xs={4} item>
                        <LoginForm />
                    </Grid>
                    <Grid  xs={4} item></Grid>
                </Grid>
        </div>
    )
}

export default Home;
