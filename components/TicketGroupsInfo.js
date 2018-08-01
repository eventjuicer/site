import React from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

//import {translate} from '../i18n'

//const BoothInfo = dynamic(import('./BoothInfo'))
//const Person = dynamic(import('./PersonSlim'))
const TicketGroup = dynamic(import('./TicketGroup'));

import Booth from './Booth';

import { resourceFetchRequest as resourceFetchRequestAction } from './redux/actions';

const styles = theme => ({});

class TicketGroupsInfo extends React.PureComponent {
  componentDidMount() {
    const { resourceFetchRequest } = this.props;

    resourceFetchRequest('ticketgroups', true);
  }

  renderTicketGroups() {
    const { ticketgroups } = this.props;

    return Object.values(ticketgroups).map(tg => <div key={tg.id} />);
  }

  render() {
    return <div>{this.renderTicketGroups()}</div>;
  }
}

const enhance = compose(
  //  translate,
  withStyles(styles),
  connect(
    state => ({
      ticketgroups: state.resources.ticketgroups
    }),
    {
      resourceFetchRequest: resourceFetchRequestAction
    }
  )
);

export default enhance(TicketGroupsInfo);
