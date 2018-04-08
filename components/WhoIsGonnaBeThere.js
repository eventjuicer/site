


import { connect } from 'react-redux';
import compose from 'recompose/compose'
import classNames from 'classnames';
import _get from 'lodash/get'

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

import {chunkArrayData} from '../helpers'
import {translate} from '../i18n'
import Typography from './MyTypography'

import {
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


const styles = theme => ({

  container : {

    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
  //  alignContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',

    height : '100%',
    width: '100%'
  },

  item : {
    fontFamily : theme.typography.fontFamily,
    fontSize : '2rem',
    fontWeight : 300,
    margin: 10,
    color : 'rgba(255, 255, 255, 0.7)',
    minHeight : '4rem'
  },

  itemHuge : {
    fontFamily : theme.typography.fontFamily,
    fontSize : '5rem',
    fontWeight : 900,
    margin: 10,
    color : 'rgba(255, 255, 255)'
  },

  strong : {
    fontWeight : 500,
  },

  white : {

  }

});


const Person = ({translate, person}) => (
  <Typography template="visitor">
  { _get(person, "fname") }
  {` ${ translate("common.from") } `}
  <span>{ _get(person, "cname2") }</span>
  </Typography>
)

const TranslatedPerson = translate(Person);


class WhoIsGonnaBeThere extends React.PureComponent {

state = {
  page : 1
}
componentDidMount()
{
  this.fetchCurrentPage();
}

fetchCurrentPage()
{
  this.props.resourceFetchRequest("visitors", false);
}


render()
{

    const { visitors, width, filter, limit, random }  = this.props;
    const _data = chunkArrayData(visitors, width, {filter, limit, random});

    return (

    <Grid container spacing={24}>

      {_data.map((chunk, i) =>

        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>

          {chunk.map((person,j) => <TranslatedPerson key={j} person={person} />

        )}

        </Grid>

        )}

    </Grid>

  )
}

}


WhoIsGonnaBeThere.defaultProps = {
  visitors : [],
  page : 1,
  filter : null,
  limit : 100,
  random : true,
}

const enhance = compose(
  withWidth(),
  withStyles(styles),
  connect(state => ({
    visitors : state.resources.visitors
  }), {
    resourceFetchRequest : resourceFetchRequestAction
  }
  )
)

export default enhance(WhoIsGonnaBeThere);
