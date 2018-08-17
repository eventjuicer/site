
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridBenefitsItem from './GridBenefitsItem'


const items = [
  {
    icon : "",
    headline : "aasdasd",
    text : "sadasdasd"

  },
  {
    icon : "",
    headline : "aasdasd",
    text : "asdasd"
  },
  {
    icon : "",
    headline : "aasdasd",
    text : "sdfasd"
  }
]

const GridBenefits = ({items, classes}) => (

  <Grid container spacing={16}>

    {items.map((item, i) => <GridBenefitsItem key={i} {...item} />)}

  </Grid>
)


GridBenefits.defaultProps = {
  items : items
}


export default GridBenefits
