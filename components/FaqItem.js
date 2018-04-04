import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { withStyles } from 'material-ui/styles';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel';

import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import {MyLink as Link} from '../next'
import {translate} from '../i18n'

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

const FaqItem = ({ baseLabel, baseUrl, label, open, important, buttons, classes, translate, locale }) => (

       <ExpansionPanel defaultExpanded={ open }>
         <ExpansionPanelSummary
           classes={{
             root : classes.default,
             expanded : classes.expanded,
           }}
           expandIcon={<ExpandMoreIcon
           />}>
            {translate(`${baseLabel}.${label}.q`)}
         </ExpansionPanelSummary>
         <ExpansionPanelDetails>

           <Typography>
            {translate(`${baseLabel}.${label}.a`)}
           </Typography>

         </ExpansionPanelDetails>
         <ExpansionPanelActions>
          <Link label="common.link" prefetch={false} href={`${baseUrl}?${label}`} />
        </ExpansionPanelActions>
       </ExpansionPanel>

);


FaqItem.defaultProps = {
  label : "",
  important : false,
  baseUrl : "",
  buttons : [],
  open : false
}

FaqItem.propTypes = {
  classes: PropTypes.object.isRequired,
  buttons : PropTypes.array
};

const enhance = compose(
  translate,
  withStyles(styles)
)

export default enhance(FaqItem);
