import Chip from 'material-ui/Chip'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import _get from 'lodash/get'
import { translate } from '../i18n'
import compose from 'recompose/compose'


const styles = theme => ({

  container : {
      display : 'flex',
      flexWrap: 'wrap',
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 20,
      marginBottom : 25
  },
  chip : {
     margin: theme.spacing.unit,
  }
})


const Tags = ({tags, classes, translate, style}) => {

  if(!tags.length) return null

  return <div className={classes.container}>{tags.map((chip, idx) => <Chip key={idx} label={translate(`common.tags.${chip}`)} className={classes.chip} />)}</div>
}

Tags.defaultProps = {
  tags : [],
  style : {}
}

export default compose(
  withStyles(styles),
  translate
)(Tags)
