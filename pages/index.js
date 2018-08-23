import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

import Layout from '../layouts/main';

import { MyHead as Head, MyLink as Link } from '../next';

import {
  Wrapper,
  ColumnList,
 // Gallery,
 // Schedule,
  FsVideo
} from '../components';


import {
  VideoWithEventInfo,
  VideoWithReviews,
  Visitor,
  FeaturedExhibitors,
  VisitorBenefits,
  RoleButtons
} from '../compositions';



import { Exhibitors, Photos } from '../datasources'

const Bookingmap = dynamic(import('../components/Bookingmap/Bookingmap'));


class PageIndex extends React.Component {

  static async getInitialProps({
    query,
    isServer,
    store
  }) {
    return {
      preload : ["exhibitors"],
  //    load : ["bookingmap", "formdata", "ticketgroups"]
    }
  }

  render() {

    return (

      <Layout>

        <Head />

        <VideoWithEventInfo />
        

      <Visitor
            label="visitors.register"
            secondaryLabel="event.parties"
      />



      <VisitorBenefits 
        label="visitors.benefits.title" 
        first
      />
   


      <RoleButtons />

        {/* <Wrapper
        label="presenters.schedule"
        secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
        links={[
          <Link key="all" href="/presenters" label="common.menu.visitors.presenters" variant="flat" color="secondary" />,
          // <Link key="subjects" href="/schedule" label="common.menu.visitors.schedule" variant="flat" color="secondary" />
        ]}
      >
        <Schedule />
        <People limit={8} random={false} link={true}  filter={function(item){ return item.bio.length > 10 }}  />
      </Wrapper> */}






        <Wrapper
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        >

        <Bookingmap />

        </Wrapper>

        <Wrapper
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
        >

        <FeaturedExhibitors />

        </Wrapper>


      <VideoWithReviews />


{/*
      <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos> */}


        <Wrapper label="exhibitors.list_full" color="#ffffff">

        <Exhibitors columns={true}>
          {(exhibitors) => <ColumnList data={exhibitors} /> }
        </Exhibitors>

        </Wrapper>


        <FsVideo
          background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
          videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4" />



      </Layout>
    );
  }
}

export default connect(null, null)(PageIndex);
