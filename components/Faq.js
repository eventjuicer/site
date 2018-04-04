import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';

import MyTypography from './MyTypography'
import FaqItem from './FaqItem'


function isSelected(){

}

function Faq(props) {
  const { selected, classes, items, baseLabel, baseUrl, translate, url } = props;
  return (
    <div style={{flexGrow : 1, marginTop: 20, marginBottom: 20, paddingBottom : 20}}>
      <MyTypography label={`${baseLabel}.name`} template="SUBH2CH" />

  

      {items.map((item, idx) => <FaqItem
        url={ url }
      //  selected={}
        key={idx}
        {...item}
        baseLabel={baseLabel}
       />)}
    </div>
  );
}


Faq.defaultProps = {
  items : [],
  baseLabel : "faq",
  url : {},
  selected : []
}

Faq.propTypes = {
  //classes: PropTypes.object.isRequired,
};

export default connect(state => ({selected : state.app.faqs}))(Faq)
