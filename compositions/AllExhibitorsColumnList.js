

import React from 'react'

import { Exhibitors } from '../datasources'

import {
  ColumnList,
  KeywordSelect,
  Centered,
  MyTypography,
  Wrapper
} from '../components';


const AllExhibitorsColumnList = (props) => (

    <Wrapper label="exhibitors.list_full" color="#ffffff" {...props}>

    <Exhibitors columns={true} sort='profile.name'>
      {(exhibitors, keywords) => 
        
    <React.Fragment>

    <Centered style={{marginTop: 80}}>

      <MyTypography label="exhibitors.list.filter_title" template="SUBH2CH" />
      <KeywordSelect keywords={keywords} />

    </Centered>

    <ColumnList data={exhibitors} />

    </React.Fragment>
      
       }
    </Exhibitors>

    </Wrapper>


)

AllExhibitorsColumnList.defaultProps = {


}

export default AllExhibitorsColumnList
