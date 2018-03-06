

import React from 'react'
import Link from 'next/link'
import get from 'lodash/get'
import {slug} from '../helpers'
import MyCard from './MyCard'
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = {


};


const LinkToProfile = ({data}) => (

   <Link  as={`/${ slug(data.fields.cname2) },c,${data.company.id}`} href={`/exhibitor?id=${ data.company.id }`}>

     <Button size="small" color="primary">
       WIĘCEJ
     </Button>

   </Link>

)


//xs, sm, md, lg, and xl.

class Avatarlist extends React.Component {

state = {

  showAll : false

}

toggleShowAll = () => {

  this.setState({showAll : !this.state.showAll});
}

render()
{

  const { data, classes } = this.props;
  const { showAll } = this.state;

  const _data = Array.isArray(data) ? data.slice(0, showAll ? data.length : 6 ) : [];

  return (

<div>

  <Grid container spacing={16}>

    {data &&  _data.map((row, idx) =>

       row.company && "id" in row.company && <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2} >
         <MyCard key={idx} title={row.fields.cname2} text={get(row.fields, "booth")} link={ <LinkToProfile data={row} />} />
       </Grid>
      )}

  </Grid>

  <Button variant="raised" onClick={this.toggleShowAll}>more</Button>

</div>

);

}

}
export default withStyles(styles)(Avatarlist);
