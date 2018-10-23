import React from 'react'

import { Offers as Datasource } from '../datasources'
import {Offer} from '../components'
import get from 'lodash/get'
import {getCompanyLogotype} from '../helpers'

import {
  Avatarlist,
  Centered,
  MyTypography,
  Wrapper
} from '../components';


const Offers = (props) => (

    <Wrapper {...props} label="exhibitors.offers.title" first={true}>

    <Datasource>{

    (promoted, all) =>

    <React.Fragment>

    <Centered style={{marginTop: 80}}>

    <MyTypography label="exhibitors.offers.list.promoted" template="SUBH2CH" />

    </Centered>

    {promoted.map( ex => <Offer 
        key={ex.id} 
        id={ex.id}
        imageSrc={getCompanyLogotype(ex)}
        text={get(ex, "profile.expo")}
        name={get(ex, "profile.name")}
        primary={true}
    />)}

    <Centered style={{marginTop: 80}}>

    <MyTypography label="exhibitors.offers.list.other" template="SUBH2CH" />

    </Centered>



    </React.Fragment>

    }</Datasource>

    </Wrapper>

)
export default Offers
