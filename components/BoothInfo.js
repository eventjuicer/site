import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import _get from 'lodash/get';

import Person from './PersonSlim';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';


import Typography from '@material-ui/core/Typography';
import Tags from './Tags'

import {getCompanyLogotype, getCompanyName} from '../helpers'

//import { resourceFetchRequest as resourceFetchRequestAction } from './redux/actions';
//import Button from '@material-ui/core/Button';
//import {translate} from '../i18n'
//import find from 'lodash/find';

const styles = theme => ({
  htmlContainer: {
    minHeight : 75,
    maxHeight : 200,
    overflow : 'scroll',
    fontWeight : 400,
  },

  media: {
   height : 100,
//   paddingTop: '56.25%',
   backgroundSize : 'contain',
   padding: 10
  },

});

class BoothInfo extends React.Component {
  // componentDidMount()
  // {
  //   this.props.resourceFetchRequest("tickets");
  // }

  render() {
    const { formdata, classes} = this.props;
    const cname2 = getCompanyName(formdata)

    if(!cname2.length){
    //  return null
    }

    return (
      <div>


      <Card raised={false} elevation={0}>
       <CardMedia
         className={classes.media}
         image={ getCompanyLogotype(formdata.company) }
         title="Contemplative Reptile"
       />
       <CardContent>
         <Typography gutterBottom variant="headline" component="h2">
           {cname2}
         </Typography>
         <Typography component="p">
           <div>
           <div
             className={classes.htmlContainer}
             dangerouslySetInnerHTML={{
               __html: _get(formdata, 'company.profile.about')
             }}
           />
           </div>
         </Typography>
       </CardContent>
       <CardActions>
         <Tags tags={_get(formdata, "company.profile.keywords")} />
         {/* <Button size="small" color="primary">
           Share
         </Button>
         <Button size="small" color="primary">
           Learn More
         </Button> */}
       </CardActions>
     </Card>





        <Person />
      </div>
    );
  }
}

const enhance = compose(
  //  translate,
  withStyles(styles),
  // connect(
  //   state => ({
  //     boothsSelected: state.boothsSelected
  //   }),
  //   { resourceFetchRequest: resourceFetchRequestAction }
  // )
);

export default enhance(BoothInfo);
