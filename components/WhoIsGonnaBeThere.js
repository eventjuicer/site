

import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import {translate} from '../i18n'
import withWidth from 'material-ui/utils/withWidth';
import classNames from 'classnames';

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



const Mktg = [

  "1000 Wystawców",
  "3000 Zwiedzających"

]


class WhoIsGonnaBeThere extends React.PureComponent {

componentDidMount()
{
  this.fetchCurrentPage();
}

fetchCurrentPage()
{
  this.props.resourceFetchRequest("visitors", false);
}

renderVisitors()
{
  const {classes, translate, visitors, width} = this.props;

  return visitors.map(({fname, cname2}, idx) => {

    if(idx%10 === 0)
    {
      return <p key={idx} className={classes.itemHuge}>A Ty?</p>
    }

    return (
      <p key={idx} className={classes.item}>{fname}{` ${translate('common.from')} `}<span className={classes.strong}>{cname2}</span></p>
    )
  }
  )

}

render()
{
  const { classes, visitors } = this.props;

  return (

    <div className={classes.container}>

      {visitors.length && this.renderVisitors() }



    </div>

  )
}

}


WhoIsGonnaBeThere.defaultProps = {
  visitors : [],
  page : 1
}

const enhance = compose(
  translate,
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
