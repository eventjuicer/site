import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
Wrapper,
WhoIsGonnaBeThere,
//Googlemap,
Gallery
} from '../components';

import {
VideoWithEventInfo,
Visitor,
VisitorBenefits,
PresentersFeatured,
//Schedule,
AllExhibitorsAvatarlist
} from '../compositions';

import Layout from '../layouts/main';

import {Photos} from '../datasources';

class PageVisit extends React.Component {

static async getInitialProps({

query,
asPath,
isServer,
store
}) {

return {
preload : ["exhibitors", "presenters"]
};
}

render() {
const { url } = this.props;

return (

<Layout>

<Head />

<Visitor 
label="visitors.register_alt" 
first 
/>  

<PresentersFeatured  />

<VideoWithEventInfo />


{/* <Schedule />  */}


<VisitorBenefits 
label="visitors.benefits.title" 
/>

{/* <Presenters filter={ function(item){ return item.bio.length > 20} } limit={16} mobile={4}  /> */}


<Visitor 
label="visitors.register" 
first 
/>

<AllExhibitorsAvatarlist label="exhibitors.list_full" />


{/* <Visitor 
label="visitors.register" 
first 
/> */}




</Layout>
);
}
}

export default connect()(PageVisit);
