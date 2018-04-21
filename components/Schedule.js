import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import _filter from 'lodash/filter'
import _find from 'lodash/find'
import _get from 'lodash/get'

import ScheduleItem from './ScheduleItem'
import ScheduleVenue from './ScheduleVenue'

import { resourceFetchRequest } from './redux/actions'
import { presenterSelector } from '../redux/reselect'


class Schedule extends React.PureComponent {

  componentDidMount(){

    if(! this.props.presenters.length){
        this.props.resourceFetchRequest("presenters", false)
    }
    if(! this.props.exhibitors.length){
        this.props.resourceFetchRequest("exhibitors", false)
    }

  }

  getCompany(id){
      return _find(this.props.exhibitors, {id}, {})
  }

  findPresentations(search, first = false) {
    const { presenters, selected } = this.props;
    return _filter(presenters, search).map(item => <ScheduleItem key={item.id} selected={item.id == selected} first={first} data={item} />)
  }

  render() {

    const { presenters, venues, times} = this.props;
    const gridData = {xs : 12, sm : 12, md : 4, lg : 4, xl : 4}

    return (

      <div>

          <Grid container spacing={16}>

          {Object.keys(venues).map(venue => <Grid key={venue} item {...gridData}>

               <ScheduleVenue
                 name={venue}
                 company={ this.getCompany( _get(venues[venue], "company_id", 0) ) }
               />

          </Grid>)}

          </Grid>

          {

            times.map((presentation_time, i) => (<Grid key={i} container spacing={16}>

                      {Object.keys(venues).map((presentation_venue, j) => <Grid key={`${i}${j}`} item {...gridData}>

                          {this.findPresentations({
                              presentation_venue, presentation_time
                          }, j === 0 )}

                        </Grid>)}

                    </Grid>)
            )

          }

      </div>
    )

  }

}

Schedule.defaultProps = {
  selected : 0,
  presenters : [],
  exhibitors : [],
  times : [
    "11:15",
    "11:50",
    "12:40",
    "13:15",
    "14:05",
    "14:40",
    "15:30",
    "16:05"
  ],
  venues : {
    "A" : {company_id : 1175},
    "B" : {company_id : 1158},
    "C" : {company_id : 1194}
  }
}


export default connect(state => ({

  presenters : presenterSelector(state),
  exhibitors : state.resources.exhibitors

}), {resourceFetchRequest })(Schedule);
