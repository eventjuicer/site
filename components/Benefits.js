import React from 'react';
import compose from 'recompose/compose';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/icons/Done';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import { translate } from '../i18n';

const styles = theme => ({
  container: {
    maxWidth: '100%'
    //  marginTop: 30
  },

  flexList: {
    display: 'flex',
    justifyContent: 'center' /*space-around space-between*/,
    alignItems: 'flex-start',

    [theme.breakpoints.only('md')]: {
      marginTop: 10,
      flexDirection: 'row'
    }
  },

  v : {
      flexDirection: 'column',
  },

  h : {
      flexDirection: 'row',
  },

  flexListItem: {
    // display: 'flex',
    // alignItems: 'flex-start'
  },

  icon: {
    color: '#000000',
    width: 40,
    height: 40
  }
});

const Benefits = ({ classes, labels, baseLabel, translate, orientation }) => (

  <div className={classes.container}>
    <List component="ul" className={ classNames(classes.flexList, classes[orientation]) }>
      {labels.map( ({icon, label}) => (
        <ListItem className={classes.flexListItem} key={label}>
          {/* <ListItemIcon> */}

            <div> { icon }</div>

             {/* <Icon className={classes.icon} /> */}
          {/* </ListItemIcon> */}
          <ListItemText primary={translate(label)} />
        </ListItem>
      ))}
    </List>
  </div>

);

Benefits.defaultProps = {
  labels: [],
  baseLabel : '',
  orientation : "v"
};

const enhance = compose(
  translate,
  withStyles(styles)
);

export default enhance(Benefits);
