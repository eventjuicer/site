import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import {translate} from '../i18n'


import {
  FsVideo,
  MyTypography,
  EventInfo
} from '../components';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : ''
  },

  eventinfo : {
    marginTop : 80
  }
};



const VideoWithEventInfo = ({ classes, locale }) => (

  <FsVideo>

    <div className={classes.container}>

      <MyTypography template="hero" label="event.claim" />

      <MyTypography template="subhero" label="event.description" />

      <div className={classes.eventinfo}>

      <EventInfo
        items={[
          {
            icon: 'location',
            secondary: 'event.location',
            primary: locale == "en" ? "Warsaw, EXPO XXI" : 'Warszawa, EXPO XXI'
          },{
            icon: 'date',
            secondary: 'event.date',
            primary: locale == "en" ? "November, the 7th 2018" : '7 listopada 2018'
          }
        ]}

        primary="heroPrimary"
        secondary="heroSecondary"
        icon="heroIcon"
      />

      </div>
    </div>

  </FsVideo>
);

const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(VideoWithEventInfo);
