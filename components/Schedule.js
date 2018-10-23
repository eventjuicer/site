import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import _filter from 'lodash/filter';
import _find from 'lodash/find';
import _get from 'lodash/get';

import ScheduleItem from './ScheduleItem';
import ScheduleVenue from './ScheduleVenue';
import ScheduleBreak from './ScheduleBreak';

import { resourceFetchRequest } from './redux/actions';
import { presenterSelector } from '../redux/reselect';

class Schedule extends React.PureComponent {
  componentDidMount() {
    if (!this.props.presenters.length) {
      this.props.resourceFetchRequest('presenters', false);
    }
    if (!this.props.exhibitors.length) {
      this.props.resourceFetchRequest('exhibitors', false);
    }
  }

  getCompany(id) {
    return _find(this.props.exhibitors, { id }, {});
  }

  findPresentations(search, first = false) {
    const { presenters, selected } = this.props;
    return _filter(presenters, search).map((item, i) => (
      <ScheduleItem
        key={item.id}
        selected={item.id == selected}
        first={i === 0}
        data={item}
      />
    ));
  }

  renderBreak(label) {
    return (
      <Grid item xs={12}>
        <ScheduleBreak label={label} />
      </Grid>
    );
  }

  renderVenues() {
    const { venues } = this.props;
    const gridData = { xs: 12, sm: 12, md: 4, lg: 4, xl: 4 };

    return Object.keys(venues).map(venue => (
      <Grid key={venue} item {...gridData}>
        <ScheduleVenue
          name={venue}
          company={this.getCompany(_get(venues[venue], 'company_id', 0))}
        />
      </Grid>
    ));
  }

  render() {
    const { presenters, venues, times } = this.props;
    const gridData = { xs: 12, sm: 12, md: 4, lg: 4, xl: 4 };

    return (
      <div>
        <Grid
          container
          spacing={40}
          hidden={{ implementation: 'css', smDown: true }}
        >
          {this.renderVenues()}
        </Grid>

        {Object.keys(times).map((time, i) => (
          <Grid key={i} container spacing={40}>
            {times[time] !== 'presentation' && this.renderBreak(times[time])}

            {times[time] === 'presentation' &&
              Object.keys(venues).map((venue, j) => (
                <Grid key={`${i}${j}`} item {...gridData}>
                  {this.findPresentations(
                    {
                      presentation_venue: venue,
                      presentation_time: time
                    },
                    j === 0
                  )}
                </Grid>
              ))}
          </Grid>
        ))}
      </div>
    );
  }
}

Schedule.defaultProps = {
  selected: 0,
  presenters: [],
  exhibitors: [],
  times: {
    '11:15': 'presentation',
    '11:50': 'presentation',
    '12:10': 'break_30',
    '12:40': 'presentation',
    '13:15': 'presentation',
    '13:35': 'break_30',
    '14:05': 'presentation',
    '14:40': 'presentation',
    '15:00': 'break_30',
    '15:30': 'presentation',
    '16:05': 'presentation'
  },

  venues: {
    A: { company_id: 1303 },
    B: { company_id: 1245 },
    //C: { company_id: 1194 }
  }

};

export default connect(
  state => ({
    presenters: presenterSelector(state),
    exhibitors: state.resources.exhibitors
  }),
  { resourceFetchRequest }
)(Schedule);
