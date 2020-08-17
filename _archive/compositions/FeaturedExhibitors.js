import React from 'react'

import { AllExhibitors } from '../datasources'
import {
  Avatarlist,
  // KeywordSelect,
  // Centered,
  // MyTypography,
  Wrapper
} from '../components';


const FeaturedExhibitors = (props) => (

  <Wrapper {...props}>
  <AllExhibitors filter={(e) => e.featured} limit="20" mobile="12" sort={['profile.name']}>{
    (exhibitors, keywords) =>

    <React.Fragment>
      <Avatarlist data={exhibitors}  />

      {/* <Centered style={{marginTop: 80}}>

        <MyTypography label="exhibitors.list.filter_title" template="SUBH2CH" />
        <KeywordSelect keywords={keywords} />

      </Centered> */}

    </React.Fragment>
  }</AllExhibitors>
  </Wrapper>

)

FeaturedExhibitors.defaultProps = {
  label : "exhibitors.list_featured"
}


export default FeaturedExhibitors
