import React from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

//import {translate} from '../i18n'

//const BoothInfo = dynamic(import('./BoothInfo'))
//const Person = dynamic(import('./PersonSlim'))
const TicketGroup = dynamic(import('./TicketGroup'));

import Booth from './Booth';

import { resourceFetchRequest as resourceFetchRequestAction } from './redux/actions';

import {KeyedTicketGroupsSelector} from '../redux/selectors'

const styles = theme => ({});

class TicketGroupsInfo extends React.PureComponent {
  componentDidMount() {
    const { resourceFetchRequest } = this.props;

    resourceFetchRequest('ticketgroups', true);
  }

  renderTicketGroups() {
    const { ticketgroups } = this.props;


    return ticketgroups.map(tg => <div key={tg.id}>grupa</div>);
  }

  render() {

    console.log(this.props)

    return null;// <div>{this.renderTicketGroups()}</div>;
  }
}

TicketGroupsInfo.defaultProps = {

}


const enhance = compose(
  //  translate,
  withStyles(styles),
  connect(
    state => KeyedTicketGroupsSelector(state),
    {
      resourceFetchRequest: resourceFetchRequestAction
    }
  )
);

export default enhance(TicketGroupsInfo);
