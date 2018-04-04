import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


import MyTypography from './MyTypography'
import FaqItem from './FaqItem'

function Faq(props) {
  const { classes, items, baseLabel, baseUrl, translate, url } = props;
  return (
    <div style={{flexGrow : 1, marginTop: 20, marginBottom: 20, paddingBottom : 20}}>
      <MyTypography label={`${baseLabel}.name`} template="SUBH2CH" />
      {items.map((item, idx) => <FaqItem baseUrl={baseUrl} open={ url.indexOf(item.label)>0 } key={idx} {...item} baseLabel={baseLabel} />)}
    </div>
  );
}


Faq.defaultProps = {
  items : [],
  baseLabel : "faq",
  baseUrl : "/faq",
  url : ""
}

Faq.propTypes = {
  //classes: PropTypes.object.isRequired,
};

export default Faq;
