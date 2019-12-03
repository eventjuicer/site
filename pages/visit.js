import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
Wrapper,
//WhoIsGonnaBeThere,
Gallery
} from '../components';

import {
VideoWithEventInfo,
Visitor,
VisitorBenefits,
PresentersFeatured,
Schedule,
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

<Visitor label="visitors.register_alt" first />  

{/* <Schedule />  */}

<VideoWithEventInfo />

{/* <PresentersFeatured  /> */}

<VisitorBenefits label="visitors.benefits.title" />

<Visitor label="visitors.register" />

<AllExhibitorsAvatarlist label="exhibitors.list_full" />

<Visitor  label="visitors.register_alt"  /> 

</Layout>
);

}
}

export default connect()(PageVisit);
