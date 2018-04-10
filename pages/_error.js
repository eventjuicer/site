import React from 'react'


import {
  MyHead as Head
} from '../next'

import reduxPage from '../redux'

import {
  Typography,
  Wrapper,
//  WhoIsGonnaBeThere,
//  Googlemap,
  People,

  TwoColsLayout as Section,

} from '../components';

import {EmoticonDevil} from 'mdi-material-ui'


import Layout from '../layouts/main';

import Visitor from '../roles/Visitor'

class PageError extends React.Component {

  static getInitialProps({ res, err }) {

    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }

  }

  render() {

    const {statusCode} = this.props;

    return (

      <Layout>

        <Head />


        <Wrapper label="common.errors.http404">


          <Section

            leftSize={5}
            left={

              <div>

                <EmoticonDevil style={{width: 300, height: 300, color : "#666666"}} />

              </div>

             }
             leftCentered={true}
             right={
               <div>



                 {/* <p>
                   {statusCode
                     ? `An error ${statusCode} occurred on server`
                     : 'An error occurred on client'}
                 </p> */}



              </div>
            } />

        </Wrapper>



        <Wrapper label="visitors.register">

          <Visitor />

        </Wrapper>



        <Wrapper
              label="presenters.list_full"
              secondaryTitle="pełna agenda już wkrótce"
              // links={[
              //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
              // ]}
            >
              <People random={true} filter={function(item){ return item.bio && item.bio.length >5; }}   />
        </Wrapper>



      </Layout>

    )
  }
}

export default reduxPage(PageError)
