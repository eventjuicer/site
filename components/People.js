
import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import Grid from 'material-ui/Grid';
import _get from 'lodash/get'
import Person from './Person'

import {processArrayData} from '../helpers'

import {
  // dialogShow as dialogShowAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


const FullJobInfo = ({company, job}) => (
    <span>{job} @ <strong>{company}</strong></span>
)

class People extends React.PureComponent {

  componentDidMount()
  {
    this.props.resourceFetchRequest("presenters", false)
  }

  render()
  {
    const { classes, presenters, filter, limit, random } = this.props;
    const data = processArrayData(presenters, {filter, limit, random})

    return (

        <Grid container spacing={24}>
            {data.map((item, i) =>
                <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                  <Person
                    avatar={_get(item, "avatar")}
                    title={`${_get(item, "fname")} ${_get(item, "lname")}`}
                    subtitle={<FullJobInfo company={_get(item, "cname2")} job={_get(item, "position")}  />}
                    text={_get(item, "bio")}
                  />
                </Grid>
              )}
          </Grid>

    );


  }


}

People.defaultProps = {
  presenters : [],
  filter : null,
  limit : false,
  random : false
}


People.propTypes = {

};

const enhance = compose(
  connect(state => ({
    presenters : state.resources.presenters,
  }), {
  //  dialogShow : dialogShowAction ,
    resourceFetchRequest : resourceFetchRequestAction
  }
  )

)


export default enhance(People);
