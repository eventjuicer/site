import React from 'react'

import { Exhibitors } from '../datasources'
import {
  Avatarlist,
  KeywordSelect,
  Centered,
  MyTypography
} from '../components';


const FeaturedExhibitors = () => (

  <Exhibitors filter={(e) => e.featured}>{
    (exhibitors, keywords) =>

    <React.Fragment>
      <Avatarlist data={exhibitors} />

      <Centered style={{marginTop: 80}}>

        <MyTypography label="exhibitors.list.filter_title" template="SUBH2CH" />
        <KeywordSelect keywords={keywords} />

      </Centered>

    </React.Fragment>
  }</Exhibitors>

)
export default FeaturedExhibitors
