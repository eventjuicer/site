

import React from 'react'
import Link from 'next/link'
import get from 'lodash/get'
import {slug} from '../helpers'
import MyCard from './MyCard'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';


const styles = {

  title : {
    fontSize : '2rem',
    textTransform: 'uppercase',
    fontWeight : 900
  },

};


const Item = ({data}) => (
  <li>
   <Link  as={`/e,${1},${ slug(data.fields.cname2) }`} href={`/exhibitor?id=${ 1 }`}>
     <a>{data.fields.cname2}</a>

   </Link>  {get(data.fields, "booth")}
 </li>
)


//xs, sm, md, lg, and xl.

class Avatarlist extends React.Component {


render()
{

  const { data, classes } = this.props;

  return (
    <section>

      <Typography variant="headline" component="h2" className={classes.title}>Wystawcy</Typography>

  <Grid container spacing={16}>

    {data && data.map(row =>

       <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
         <MyCard title={row.fields.cname2}  />
       </Grid>
      )}

  </Grid>


</section>
);

}

}
export default withStyles(styles)(Avatarlist);
