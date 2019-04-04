import React from 'react'
import { MyTypography } from '../components';
import {connect} from 'react-redux'
import {formActionFinished} from './redux'

class FormSuccess extends React.Component {

  componentDidMount(){

    const {formActionFinished} = this.props;
    
    formActionFinished({
      action : "registration_success", 
      category : "visitors", 
      label : "method",
      value : ""
    });

  }

  render(){
    const {baseLabel} = this.props
    return  <MyTypography label={`${baseLabel}.form.success`} template="alert" />
  }

}


FormSuccess.defaultProps = {
  baseLabel : "visitors"
}

export default connect(null, {formActionFinished})(FormSuccess);
