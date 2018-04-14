


import React from 'react';

import _get from 'lodash/get'

import Grid from 'material-ui/Grid';
import withWidth from 'material-ui/utils/withWidth';

import SubPageItem from './SubPageItem';

//xs, sm, md, lg, and xl.

import {chunkArrayData} from '../helpers'


class ColumnList extends React.PureComponent {



render()
{

  const { data, width, filter, limit, linked }  = this.props;

  let _data = chunkArrayData(data, width, {filter, limit});

  return (


  <Grid container spacing={24}>

    {_data.map((chunk, i) =>

      <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>

        {chunk.map((company,j) => <SubPageItem subpage="company" key={j} name={ _get(company, "profile.name") } id={ company.id }  />)}

      </Grid>

      )}

  </Grid>



);

}

}

ColumnList.defaultProps = {
  linked : true,
  data : [],
  width : "md",
  filter : null,
  limit : false
}

export default withWidth()(ColumnList);
