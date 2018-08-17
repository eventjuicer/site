import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import { withStyles } from '@material-ui/core/styles';
import { translate } from '../i18n';
import compose from 'recompose/compose';
import classNames from 'classnames';

import Icon from './Icon';

const styles = theme => ({
  h: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'top',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  v: {
  //  maxWidth: 400
  },

  small: {},

  medium: {},

  primaryBig: {
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
      fontWeight: 900
    }
  },

  secondaryBig: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    }
  },

  bigIcon : {
    fontSize : 50
  },

  invert: {
    color: '#ffffff'
  },

  heroPrimary: {
    color: '#ffffff',
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
      fontWeight: 900
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
  },

  heroSecondary: {

    color: '#eaeaea',
    fontSize: '2rem',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      fontWeight: 900
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    }
  }




});

const EventInfo = ({
  classes,
  items,
  translate,
  orientation,
  style,
  styles,
  size,
  invert
}) => (
  <div style={{ ...style }}>
    <List component="ul" className={classes[orientation]}>
      {items.map(({ primary, icon, secondary }, i) => {
        return (
          <ListItem key={i}>
            {icon ? (
              <ListItemIcon>
                <Icon name={icon} variant="red" className={
                  classNames({[classes.bigIcon] : size === "big"})
                } />
              </ListItemIcon>
            ) : null}
            <ListItemText
              primary={primary}
              secondary={translate(secondary)}
              classes={{
                primary: classNames((primary && primary in classes ? classes[primary] : "")),
                secondary: classNames((secondary && secondary in classes ? classes[secondary] : ""))
              }}
            />
          </ListItem>
        );
      })}
    </List>
  </div>
);

EventInfo.defaultProps = {
  items: [],
  orientation: 'v',
  size: 'small',
  invert: false,
  style: {},
  primary : null,
  secondary : null,
  icon : null
};

const enhance = compose(
  withStyles(styles),
  translate
);

export default enhance(EventInfo);
