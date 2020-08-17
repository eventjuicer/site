import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import { translate } from '../i18n';
import compose from 'recompose/compose';
import classNames from 'classnames'

const styles = theme => ({
  root: {
    marginBottom: 10
  },

  chip: {
    margin: theme.spacing.unit
  },

  chipLarge: {
    margin: 3 * theme.spacing.unit,
    marginRight : 20,
    fontWeight : 400,
    fontSize : 40,
    height : 55,
    borderRadius: 40
  },

  venue: {
    // backgroundColor : red[500],
    // color : '#ffffff'
  }
});

const PresentationLabel = ({ time, venue, classes, translate, enlarge }) => (
  <div className={classes.root}>
    <Chip label={time} classes={{root : classNames(
      {
      [classes.chip] : true,
      [classes.chipLarge] : enlarge
      }
    )}} />
    {!enlarge && <Chip
      label={`Scena ${venue}`}
      className={classes.chip}
      classes={{
        root: classes.venue
      }}
    />}
  </div>
);

PresentationLabel.defaultProps = {
  enlarge : false
}

const enhance = compose(
  withStyles(styles),
  translate
);

export default enhance(PresentationLabel);
