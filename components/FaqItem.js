import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel';

import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import {translate} from '../i18n'
import {faqToggle} from './redux'

const styles = theme => ({


  default: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily : theme.typography.fontFamily
  },
  expanded : {
    fontWeight : 900,
  }

});



const FaqItem = ({ faqToggle, selected, baseLabel, url, label, important, buttons, classes, translate }) => (

       <ExpansionPanel onChange={(event, state) => faqToggle(label, state)} defaultExpanded={ url.asPath.indexOf(label)>0 }>
         <ExpansionPanelSummary
           classes={{
             root : classes.default,
             expanded : classes.expanded,
           }}
           expandIcon={<ExpandMoreIcon />}
           >
            {translate(`${baseLabel}.${label}.q`)}
         </ExpansionPanelSummary>
         <ExpansionPanelDetails>

           <Typography>
            {translate(`${baseLabel}.${label}.a`)}
           </Typography>

         </ExpansionPanelDetails>
         {/* <ExpansionPanelActions>

        </ExpansionPanelActions> */}
       </ExpansionPanel>

);


FaqItem.defaultProps = {
  label : "",
  important : false,
  buttons : [],
  url : {}
}

FaqItem.propTypes = {
  classes: PropTypes.object.isRequired,
  buttons : PropTypes.array
};

const enhance = compose(
  translate,
  connect(null, {faqToggle}),
  withStyles(styles)
)

export default enhance(FaqItem);
