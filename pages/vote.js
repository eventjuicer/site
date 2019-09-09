import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
Wrapper,
WhoIsGonnaBeThere,
//Googlemap,
Gallery,
VoteWithLinkedIn
} from '../components';

import {
VideoWithEventInfo,
Visitor,
VisitorBenefits,
Presenters,
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
    preload : ["exhibitors", "presenters"],
    query : query
};
}

render() {

const { query } = this.props;

return (

<Layout>

<Head />

<VoteWithLinkedIn urlParams={query} />

</Layout>
);
}
}

export default connect()(PageVisit);
