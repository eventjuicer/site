import React from 'react'

import {
    connect,
    reduxWrapper
  } from 'eventjuicer-site-components';

const Redirect = () => null

export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {
  
    return {
        redirect: {
          permanent: true,
          destination: "/stages/a"
        },
        props: {}
    }

})

export default connect()(Redirect);
  