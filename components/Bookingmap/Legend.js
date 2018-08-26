import React from 'react'
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import MyTypography from '../MyTypography'
import {FilteredTicketGroupsSelector} from '../../redux/selectors'

import Booth from './Booth'

const styles = {
    root : {
      maxWidth : 1000,
      margin: '0px auto 10px auto',
    },

    description : {

    },
    
    groups : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap'
    }
}

const data = {
    dh : 40,
    dw : 60,
}

const Legend = ({ticketgroups, classes}) =>  (
  <div className={classes.root}>
  <div className={classes.description}>
    <MyTypography label="event.sales.pool.legend" />
  </div>
  <div className={classes.groups}>
  {ticketgroups.map(tg => <Booth key={tg.name} groupId={tg.id} legend={true} styling={"style1"} selected={false} data={{...data, ti : tg.name}} onClick={function(){} } />)}
  </div>
  </div>
)


Legend.defaultProps = {
    ticketgroups : [],
    allowedGroupIds : [264,265,266,267]
}

const mapStateToProps = (state,props) => {
    const func = (state, props) => ({ticketgroups : FilteredTicketGroupsSelector(state, props)})
    return func
}

const enhance = compose(
    withStyles(styles),
    connect( mapStateToProps )
  );
  
export default enhance(Legend);
  