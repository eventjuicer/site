import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import { get } from 'lodash';

import { TwoColsLayout } from './MyLayouts';
import CompanyData from './CompanyData';
import CompanyLogotype from './CompanyLogotype';
import Tags from './Tags';

const Company = ({ company }) => (
  <TwoColsLayout
    leftSize={5}
    left={<CompanyLogotype company={company} />}
    leftCentered={true}
    right={
      <div>
        <Tags tags={get(company, 'profile.keywords')} />

        <CompanyData company={company} />
      </div>
    }
  />
);

Company.propTypes = {
  company: PropTypes.object.isRequired
};

export default pure(Company);
