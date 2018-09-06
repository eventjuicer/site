
import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import dynamic from 'next/dynamic';
import { MyHead } from '../next';

const CompanyBookingmap = dynamic(import('../compositions/CompanyBookingmap'));

import {
  getCompanyAltOgImage,
  getCompanyProfileInfo,
} from '../helpers';

import { SingleRecord } from "../datasources"

import {
  Wrapper,
  CompanyData,
  CompanyLogotype,
  KeywordSelect,
  TwoColsLayout,
  Centered
} from '../components';

const Company = ({id, asPath}) => (

  <SingleRecord endpoint="companies" id={id}>
  {
  (company) =>
  <React.Fragment>
  <MyHead
      image={getCompanyAltOgImage(company, asPath)}
      url={asPath}
      titleLabel={[
        'companies.opengraph.title',
        { name: getCompanyProfileInfo(company, 'name') }
      ]}
    />

    <Wrapper label="">

    <TwoColsLayout
      leftSize={5}
      left={<CompanyLogotype company={company} />}
      leftCentered={true}
      right={

      <div style={{marginTop: 50}}>

        <Centered>
         <KeywordSelect keywords={get(company, 'profile.keywords', [])} />
        </Centered>

        <div style={{marginTop: 10}}>
          <CompanyData id={id} endpoint="companies" />
        </div>
      
      </div>  
    }
    />

    </Wrapper>

    <CompanyBookingmap company={company} />
    
    </React.Fragment>
}
</SingleRecord>)


export default Company
