import React from 'react';
import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import Grid from 'material-ui/Grid';

import _get from 'lodash/get'
import Person from './Person'


import Presentation from './Presentation'

import {
  processArrayData,
  changeLimitForScreen
} from '../helpers'

import {
  // dialogShow as dialogShowAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


const FullJobInfo = ({company, job}) => (
    <span>{job} @ <strong>{company}</strong></span>
)

class Schedule extends React.PureComponent {

  componentDidMount()
  {

    if(! this.props.presenters.length)
    {
      this.props.resourceFetchRequest("presenters", false)
    }

  }

  isMobile(w){
    return w === "xs" || w === "sm"
  }

  render()
  {

    const { classes, presenters, filter, limit, random, width, link } = this.props;
    const data = processArrayData(presenters, {
        filter,
        limit : changeLimitForScreen(limit, width),
        random
    })

    const gridData = {xs : 12, sm : 12, md : 4, lg : 4, xl : 4}

    return (

        <Grid container spacing={24}>
            {data.map((item, i) =>
                <Grid key={i} item {...gridData}>

                   <Presentation data={item} addPresenterInfo={true} />

                </Grid>
              )}
          </Grid>

    );


  }


}



Schedule.defaultProps = {
  presenters : [],
  filter : null,
  limit : false,
  random : false,
  width : "sm",
  link : false
}


Schedule.propTypes = {

};

const enhance = compose(
  connect(state => ({
    presenters : state.resources.presenters,
    width : state.app.width
  }), {
  //  dialogShow : dialogShowAction ,
    resourceFetchRequest : resourceFetchRequestAction
  })
)


export default enhance(Schedule);
