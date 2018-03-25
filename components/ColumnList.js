



import _chunk from 'lodash/chunk'
import _get from 'lodash/get'

import Grid from 'material-ui/Grid';
import withWidth from 'material-ui/utils/withWidth';

import SubPageItem from './SubPageItem';

//xs, sm, md, lg, and xl.

class ColumnList extends React.PureComponent {


getSizes(what)
{

  const { width }  = this.props;

  let ch = 2;

  switch(width)
  {
      case "xs":
        ch = 1
      break

      case "sm":
        ch = 2
      break

      case "md":
        ch = 3
      break

      case "lg":
        ch = 4
      break

      case "xl":
        ch = 4
      break

  }

  const sizes = {ch}

  return sizes[what]

}


render()
{

  const { data, width, filter }  = this.props;

  const _data  = Array.isArray(data) ? _chunk(data, Math.round(data.length / this.getSizes("ch")) ) : [];


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
  filter : null
}

export default withWidth()(ColumnList);
