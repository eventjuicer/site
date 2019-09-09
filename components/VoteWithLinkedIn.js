import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


import { translate } from '../i18n'
import {linkedInTokenReceive} from './redux/actions'




const styles = {

}

class VoteWithLinkedIn extends Component {
    
    componentDidMount(){

        const {urlParams, linkedInTokenReceive} = this.props;

        if("code" in urlParams){
            linkedInTokenReceive(urlParams.code);
        }

    }

    render(){

        const {url, token} = this.props;

        return (

           <div style={{marginTop: 100}}>
             <a href={url}>
                <img src="/static/linkedin.png" alt="" />
             </a>
             {token && <div>{token}</div>}
           </div>
        )
    }

}

VoteWithLinkedIn.defaultProps = {
    url : 'https://api.eventjuicer.com.local/v1/services/linkedin'
}

VoteWithLinkedIn.propTypes = {
    urlParams: PropTypes.object,
}

const enhance = compose(
    translate,
    withStyles(styles),
    connect((state) => ({token : state.app.linkedin}), {linkedInTokenReceive})
)

export default enhance(VoteWithLinkedIn);