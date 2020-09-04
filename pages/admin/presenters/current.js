

import { 
  MyTypography as Typography,
  WidgetPresenters, 
  connect,
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../../../settings'

const AdminPresentersCurrent = () =>  <WidgetPresenters limit={null} filter={null} />

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  await configure(store, {
    settings : settings,
    preload : ['presenters']
  })

  return {props: {
    
  }, revalidate: 3}

})


export default connect()(AdminPresentersCurrent);