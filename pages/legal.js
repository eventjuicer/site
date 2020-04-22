import React from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'

class PageLegal extends React.Component {

    componentDidMount(){
        Router.push('/legal-20200324')
    }

    render() {
        return null
    }
}

export default connect()(PageLegal);
