import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import { KeyedPresentersSelector, getPresenterByIdSelector } from '../redux/selectors'
import {resourceFetchRequest } from '../components/redux'

// import { getCompanyProfileInfo, filterCompanyInstances } from '../helpers';

class Presenters extends React.Component {

  componentDidMount(){

      const {resourceFetchRequest, data} = this.props

      if(!data.length){
        resourceFetchRequest("presenters")
      }
  }

  // shouldComponentUpdate(nextProps){
  //
  //   const {data, keyword} = this.props
  //
  //   if(keyword !== nextProps.keyword){
  //     return true
  //   }
  //
  //   //at first 4 are returned...because of MOBILE first :)
  //
  //   const ids = data.map(a => a.id)
  //
  //   console.log(ids)
  //
  //   return false
  // }

  render(){

    const {children, data, keyed, record} = this.props

    if(children){

      return children({data, keyed, record})

    }

    return null
  }

}

Presenters.propTypes = {
   data: PropTypes.array.isRequired,
//   keywords: PropTypes.array.isRequired,
   record : PropTypes.object.isRequired
};

Presenters.defaultProps = {
   keyed : {},
   data : [],
   record : {},
   filter : ""
};

export default connect(

  (state, props) => {

    const mapStateToProps = (state, props) => {
      return {
        data : state.resources.presenters,
        keyed : KeyedPresentersSelector(state, props),
        record : getPresenterByIdSelector(state, props)
      }
    }
    return mapStateToProps

}, {resourceFetchRequest})(Presenters)
