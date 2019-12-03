import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
Wrapper,
// WhoIsGonnaBeThere,
// Googlemap,
// Gallery,
VoteWithLinkedIn
} from '../components';

import {
//VideoWithEventInfo,
Visitor,
//VisitorBenefits,
CallForPapers,
//Schedule,
Votable,
SalesMap,
//AllExhibitorsAvatarlist,
VoteStatus,
RoleButtons
} from '../compositions';

import Layout from '../layouts/main';

/*
  'err',
  'req',
  'res',
  'pathname',
  'query',
  'asPath',
  'AppTree',
  'store',
  'isServer'
*/

class PageVisit extends React.Component {

static async getInitialProps(props) {

    const {query, asPath} = props;

    return {
        preload : ["callforpapers"],
        query : query,
        asPath : asPath
    };
}
 // <VoteWithLinkedIn id={id} />

render() {

const { query, asPath } = this.props;
const { id, keyword } = query;

return (

<Layout>

<Head />

{id &&  <Votable 
    id={ id } 
    asPath={asPath} 
    vote={
       null
    } 
    status={
        <VoteStatus />
    } /> 
}



<CallForPapers intro={
    <VoteStatus />
} 
    limit={200} 
    filter={item => item.custom_admin_1 == 2 && item.avatar.indexOf("http")>-1 && item.logotype.indexOf("http")>-1}
    keyword_source="cfp_category"
    keyword={keyword}
/>

<RoleButtons />

{/* <SalesMap
 label="exhibitors.map.title2"
 secondaryLabel="exhibitors.map.opensales"
 disabled={false}
/> */}

<Visitor />

</Layout>
);
}
}

export default connect()(PageVisit);
