



import _chunk from 'lodash/chunk'
import _get from 'lodash/get'

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import withWidth from 'material-ui/utils/withWidth';


import SubpageItem from './SubpageItem';



//xs, sm, md, lg, and xl.

class Avatarlist extends React.Component {

renderFeatured()
{
  const { data }  = this.props;
  const featured  = Array.isArray(data) ? data.slice(0, 4) : [];

  return featured.map((company, i) =>
    <Grid key={i} item xs={6} sm={6} md={4} lg={3} xl={2}>
      <SubpageItem namespace="c" name={ _get(company, "slug") } id={ company.id } src="/static/logotype.gif" />
    </Grid>
  )
}

renderAll()
{
  const { data, width }  = this.props;
  const _data  = Array.isArray(data) ? _chunk(data, Math.round(data.length / 4) ) : [];

  return _data.map((chunk, i) =>
    <Grid key={i} item xs={6} sm={6} md={4} lg={3} xl={2}>

      {chunk.map((company,j) => <SubpageItem namespace="c" key={j} name={ _get(company, "slug") } id={ company.id }  />
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

  <Grid container spacing={24} justify="center">
    {this.renderAll()}
  </Grid>

</div>

);

}

}



export default withWidth()(Avatarlist);
