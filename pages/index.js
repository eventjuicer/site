import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

import Layout from '../layouts/main';

import { MyHead as Head, MyLink as Link } from '../next';

import {
Wrapper,
ColumnList,
// Gallery,
FsVideo,
} from '../components';


import {
VideoWithEventInfo,
VideoWithReviews,
Visitor,
FeaturedExhibitors,
// AllExhibitorsColumnList,
RoleButtons,
SalesMap,
PresentersFeatured, 
Schedule,
AllPastExhibitorsColumnList
} from '../compositions';


class PageIndex extends React.Component {

static async getInitialProps({
query,
isServer,
store
}) {
return {
    preload : ["allexhibitors"],
//    load : ["bookingmap", "formdata", "ticketgroups"]
}
}

render() {

return (

<Layout>

<Head />

<VideoWithEventInfo />


<SalesMap
  label="exhibitors.map.title2"
  secondaryLabel="exhibitors.map.opensales"
  disabled={false}
/>


<Visitor
label="visitors.register"
secondaryLabel="event.parties"
/>


<PresentersFeatured filter={() => true} text={() => null} limit={16} /> 

{/* <Schedule /> */}


<FeaturedExhibitors

label="exhibitors.list_featured"
secondaryTitle=""
links={[
    <Link
    key="all"
    href="/exhibitors"
    label="common.menu.visitors.exhibitors"
    variant="flat"
    color="secondary"
    />
]}

/>

<RoleButtons />


<Visitor
label="visitors.register"
secondaryLabel="event.parties"
/>

{/* <Presenters /> */}

{/* <Visitor
label="visitors.register_alt"
secondaryLabel="event.parties"
/>  */}

<AllPastExhibitorsColumnList />

<FsVideo
background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"

/>

<Visitor
label="visitors.register_alt"
secondaryLabel="event.parties"
/>

</Layout>
);
}
}

export default connect(null, null)(PageIndex);
