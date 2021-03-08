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
  
    return {
      paths: [
        { params: { stage: "A"} },
        { params: { stage: "B"} },
        { params: { stage: "C"} },
        { params: { stage: "D"} }
      ],
      fallback: "blocking" 
    };
     
  }
  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
    
    const {params: {stage}} = props;

    await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })

    return {
      props : {
        stage: stage
      },
      revalidate : 10
    }
  })
  
export default connect()(PageStage);