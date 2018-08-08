import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import EventInfo from './EventInfo';
import Typography from './MyTypography';
import Wrapper from './Wrapper';


const styles = theme => ({
  container: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },

  video: {
    zIndex: -1,
    bottom: 0,
    right: 0,
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden'
  },

  overlay: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },

  hero: {
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height : '50vh',
    marginLeft : 30
  }
});


/*
overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: opacity .2s;
    transition-delay: .2s;

    */


const HeroTypo = ({ links, classes, width }) => (


  <div className={classes.container}>
    {/* <Wrapper dense={true} color="#ffffff"> */}
      <Grid container spacing={8} justify="space-around" alignItems="center">

        <Grid item xs={12} sm={12} md={7} lg={7}  xl={7}>




          <div className={classes.hero}>
          <Typography template="hero">
            Cały eHandel w jednym miejscu.
          </Typography>
          </div>

        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>

        asd
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

          <EventInfo
            items={[
              {
                icon: 'location',
                label: 'event.location',
                text: 'EXPO XXI Warszawa, Prądzyńskiego 12/14'
              },

              {
                icon: 'date',
                label: 'event.date',
                text: '7 listopada 2018'
              }
            ]}
            orientation="h"
            size="big"
          />

        </Grid>


      </Grid>
    {/* </Wrapper> */}
  </div>
);

HeroTypo.defaultProps = {
  links: []
};


export default withStyles(styles)(HeroTypo);
