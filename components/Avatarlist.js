



import _chunk from 'lodash/chunk'
import _get from 'lodash/get'

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import withWidth from 'material-ui/utils/withWidth';


import SubPageItem from './SubPageItem';



//xs, sm, md, lg, and xl.

class Avatarlist extends React.Component {

renderFeatured()
{
  const { data }  = this.props;
  const featured  = Array.isArray(data) ? data.slice(0, 4) : [];

  return featured.map((company, i) =>
    <Grid key={i} item xs={6} sm={6} md={4} lg={3} xl={2}>
      <SubPageItem subpage="company" name={ _get(company, "profile.name") } id={ company.id } src={_get(company, "profile.logotype")} />
    </Grid>
  )
}

renderAll()
{
  const { data, width }  = this.props;
  const _data  = Array.isArray(data) ? _chunk(data, Math.round(data.length / 4) ) : [];

  return _data.map((chunk, i) =>
    <Grid key={i} item xs={6} sm={6} md={4} lg={3} xl={2}>

      {chunk.map((company,j) => <SubPageItem subpage="company" key={j} name={ _get(company, "profile.name") } id={ company.id }  />
)}
    </Grid>
  )

}


render()
{
  return (

<div>

  <Grid container spacing={24}>
    {this.renderFeatured()}
  </Grid>

  <Grid container spacing={24}>
    {this.renderAll()}
  </Grid>

</div>

);

}

}



export default withWidth()(Avatarlist);
