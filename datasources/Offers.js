import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import {PromotedExhibitorOffers} from '../redux/selectors'
import {resourceFetchRequest } from '../components/redux'


class Offers extends React.Component {

  componentDidMount(){

      const {resourceFetchRequest, data} = this.props

      if(!data.length){
        resourceFetchRequest("exhibitors")
      }
  }
 

  render(){

    const {children, promoted} = this.props

    if(children){

      return children(promoted, null)

    }

    return null
  }

}

Offers.propTypes = {
  data: PropTypes.array.isRequired,
  keywords: PropTypes.array.isRequired,
  keyword : PropTypes.string
};

Offers.defaultProps = {
  data : [],
  keywords : [],
  keyword : ""
};

export default connect(

  (state, props) => {

    const mapStateToProps = (state, props) => {
      return {
        promoted : PromotedExhibitorOffers(state, props),
      }
    }
    return mapStateToProps

}, {resourceFetchRequest})(Offers)
