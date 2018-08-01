import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';

import CompanyContactItem from './CompanyContactItem';

const styles = theme => ({
  listContainer: {},
  contactList: {
    display: 'flex',
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },

  contactListItem: {}
});

function CompanyContacts({ profile, allowed, classes }) {
  const socials = Object.keys(profile).filter(
    item => allowed.indexOf(item) > -1
  );

  return (
    <div className={classes.listContainer}>
      <List component="ul" className={classes.contactList}>
        {socials.map((name, idx) => (
          <li key={idx} className={classes.contactListItem}>
            <CompanyContactItem
              baseLabel="companies.profile"
              name={name}
              link={profile[name]}
            />
          </li>
        ))}
      </List>
    </div>
  );
}

CompanyContacts.defaultProps = {
  allowed: ['facebook', 'twitter', 'linkedin', 'website']
};

export default withStyles(styles)(CompanyContacts);
