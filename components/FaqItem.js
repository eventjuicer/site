import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { withStyles } from 'material-ui/styles';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import {translate} from '../i18n'


const styles = theme => ({


  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

});

function FaqItem(props) {
  const { baseLabel, item, classes, translate, locale } = props;
  return (

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
           {translate(`${baseLabel}.${item.label}`)}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           {translate(`${baseLabel}.${item.label}`)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

  );
}


FaqItem.defaultProps = {

}

FaqItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  translate,
  withStyles(styles)
)

export default enhance(FaqItem);
