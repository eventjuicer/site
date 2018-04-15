
import React from 'react';
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List';

import CompanyContactItem from './CompanyContactItem'

const styles = theme => ({


   listContainer : {

   },
   contactList : {
     display: 'flex',
     minHeight : 100,
     flexDirection : 'row',
     alignItems : 'center',
     justifyContent : 'center',

     [theme.breakpoints.down('md')]: {
       flexDirection : 'column',
     },

   },

})


function CompanyContacts({profile, allowed, classes})
{
    const socials = Object.keys(profile).filter(item => allowed.indexOf(item) > -1)

    return (
        <div className={classes.listContainer}>
        <List component="ul" className={classes.contactList}>
        {socials.map((name, idx) => <CompanyContactItem key={idx} name={name} link={profile[name]} />)}
        </List>
        </div>
    )
}

CompanyContacts.defaultProps = {
  allowed : ["facebook", "twitter", "linkedin", "website"]
}

export default withStyles(styles)(CompanyContacts)
