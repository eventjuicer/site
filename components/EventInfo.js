import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { translate } from '../i18n';
import compose from 'recompose/compose';
import classNames from 'classnames';

import Icon from './Icon';

const styles = theme => ({
  h: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  v: {
    maxWidth: 400
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
    fontSize: '2rem',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    }
  },

  invert: {
    color: '#ffffff'
  }
});

const EventInfo = ({
  classes,
  items,
  translate,
  orientation,
  style,
  size,
  invert
}) => (
  <div style={{ ...style }}>
    <List component="ul" className={classes[orientation]}>
      {items.map(({ label, icon, text }, i) => {
        return (
          <ListItem key={i}>
            {icon ? (
              <ListItemIcon>
                <Icon name={icon} variant="red" />
              </ListItemIcon>
            ) : null}
            <ListItemText
              primary={text}
              secondary={translate(label)}
              classes={{
                primary: classNames({
                  [classes.primaryBig]: size === 'big',
                  [classes.invert]: invert
                }),
                secondary: classNames({
                  [classes.secondaryBig]: size === 'big',
                  [classes.invert]: invert
                })
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
  style: {}
};

const enhance = compose(
  withStyles(styles),
  translate
);

export default enhance(EventInfo);
