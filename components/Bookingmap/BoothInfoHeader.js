import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import _get from 'lodash/get';

import { getTicketGroup } from '../../redux/selectors'


import Typography from '../MyTypography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  booth: {
    display: 'table',
    width: 105,
    height: 70,
    borderRadius: 3,
    padding: 0,
    marginBottom: 20,
    boxShadow: '1px 1px #555555'
  },

  boothText: {
    display: 'table-cell',
    verticalAlign : 'middle',
    textAlign : 'center',
    fontWeight: 900,
    fontFamily: "'Verdana', 'Arial', sans-serif",
    fontSize: 15
  },

});


const BoothInfoHeader = ({ 
  ticketgroup,
  label,
  classes
 }) => {
  
  const backgroundColor = _get(ticketgroup, 'map.bgcolor');
  const border = `1px solid ${_get(ticketgroup, 'map.bordercolor')}`;
  const color = _get(ticketgroup, 'map.fontcolor');

  return (
    <div className={classes.container}>
      <div
        className={classes.booth}
        style={{ backgroundColor, border, color }}
      >
        <div className={classes.boothText}>{label}</div>
      </div>

      <Typography>{_get(ticketgroup, 'name')}</Typography>
    </div>
  );
};


const enhance = compose(
  connect(
    (state, props) => {
      const mapStateToProps = (state, props) => {
        return {
          ticketgroup : getTicketGroup(state, props)
        }
      }
      return mapStateToProps}
  ),
  withStyles(styles),
  onlyUpdateForKeys(["groupId"])
)

export default enhance(BoothInfoHeader);



/*

GROUP

agg : {offered: 30, sold: 27, customers: 27}
descriptions : {pl: "...", en: "...", de: ""}
id : 248
limit : 29
map : {....}
name : "Standard"
tickets : []

*/

/*
FORMDATA
{id: "booth-22-242", ti: "D 1.2"}
*/
