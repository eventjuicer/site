
import React from 'react';

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
//import {ListItem} from 'material-ui/List';

import classNames from 'classnames'
import compose from 'recompose/compose'
import { translate } from '../i18n'
import Icon from './Icon'

const styles = theme => ({
  button: {
     margin: theme.spacing.unit,
   },


})



const CompanyContactItem = ({name, link, classes, translate}) =>
{


  return (
    <li className={classes.contactListItem}>
      <Button
        disabled={!link || !link.length}
        className={classes.button}
        variant="flat"
        href={link}
        target="_blank"
        >
         <Icon name={name}  />
         {translate(name)}
       </Button>
    </li>
  )
}

const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(CompanyContactItem)
