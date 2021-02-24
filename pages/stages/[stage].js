import React from 'react'
import {
    connect,
    WidgetStage,
    WidgetSchedule,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  const settings = require('../../settings').default;


  const PageStage = ({stage}) => (

    <>


    <WidgetStage stage={stage} />
    <WidgetSchedule />
  
  </>
  )

  export async function getStaticPaths() {
  
    // const request = await fetch(`${settings.system.api}/company-slugs`)
    // const slugs = await request.json();

    // if(!"data" in slugs){
    //   return
    // }

    // //precache only featured?
    // const filtered = slugs.data.filter(item => item.featured)

    return {
      // paths: filtered.map(row => ({ 
      //     params: {
      //       slug : row.slug
      //     }
      //   })),
      paths: [],
      fallback: "blocking" 
    };
     
  }
  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

    console.log(props);
    
    const {stage} = props.params;

    await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })

    return {
      props : {
        stage :stage
      },
      revalidate : 10
    }
  
  })
  
  
export default connect()(PageStage);
  



