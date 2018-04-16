
import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Hero from './Hero'
import EventInfo from './EventInfo'
import MyTypography from './MyTypography'
import compose from 'recompose/compose'


const styles = {

  container : {
    marginTop: -30,
    // width: '100%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
}

const HeroCustom = ({classes, width}) => (


  <Hero>

    <div className={classes.container}>

      <EventInfo
        items={[

        {
          icon :  "location",
          label : "event.location",
          text : "EXPO Kraków, Galicyjska 9"
        },

        {
          icon : "date",
          label : "event.date",
          text : "25 kwietnia 2018"
        },

        {
          icon : "alarm",
          label : "event.hours",
          text : "10:00-17:00"
        },

      ]}

      orientation={width === "xs" || width === "sm" ? "v" : "h"}
      size="big"
      invert={true}

    />


    <MyTypography template="hero">
      Cały eHandel w jednym miejscu!
    </MyTypography>

    </div>

  </Hero>


)

const enhance = compose(
  withStyles(styles),
  connect((state) => ({width : state.app.width}))
)

export default enhance(HeroCustom);
