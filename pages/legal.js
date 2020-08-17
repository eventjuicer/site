
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

import { connect, configure, reduxWrapper } from 'eventjuicer-site-components';
import settings from '../settings'


const PageLegal = () => {

    const router = useRouter();

    useEffect(()=>{

        router.push('/legal-20200324')
    })

    return null
} 


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings: settings,
      preload: []
    })
    
  })


export default connect()(PageLegal);
