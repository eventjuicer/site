import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import { get } from 'lodash';

import { TwoColsLayout } from './MyLayouts';
import CompanyData from './CompanyData';
import CompanyLogotype from './CompanyLogotype';
import KeywordSelect from './KeywordSelect';

const Company = ({ company }) => (
  <TwoColsLayout
    leftSize={5}
    left={<CompanyLogotype company={company} />}
    leftCentered={true}
    right={

      <div style={{marginTop: 40}}>

        <KeywordSelect keywords={get(company, 'profile.keywords', [])} />

        <CompanyData company={company} />

      </div>
    }
  />
);

Company.propTypes = {
  company: PropTypes.object.isRequired
};

export default pure(Company);
