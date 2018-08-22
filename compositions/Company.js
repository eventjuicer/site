
import dynamic from 'next/dynamic';
import { MyHead } from '../next';

const CompanyBookingmap = dynamic(import('../compositions/CompanyBookingmap'));

import {
  getCompanyAltOgImage,
  getCompanyProfileInfo,
} from '../helpers';

import { SingleRecord } from "../datasources"

import {
//  MyTypography as Typography,
  Wrapper,
  Company as CompanyProfile,
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
      <CompanyProfile company={company} />
    </Wrapper>

    <CompanyBookingmap company={company} />
    </React.Fragment>
}
</SingleRecord>)


export default Company
