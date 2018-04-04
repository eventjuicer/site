


import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import List from 'material-ui/List';
import classNames from 'classnames'
import compose from 'recompose/compose'
import { translate } from '../i18n'
import { capitalizeFirstLetter } from '../helpers'


import Linkedin from 'mdi-material-ui/Linkedin'
import Facebook from 'mdi-material-ui/Facebook'
import Twitter from 'mdi-material-ui/Twitter'
import Website from 'mdi-material-ui/Home'



const styles = theme => ({
  button: {
     margin: theme.spacing.unit,
   },
   leftIcon: {
     marginRight: theme.spacing.unit,
   },
   rightIcon: {
     marginLeft: theme.spacing.unit,
   },
   iconSmall: {
     fontSize: 20,
   },
   listContainer : {
     display: 'flex',
     justifyContent : 'center'
   },
   contactList : {
     width: 'auto'
   }
})


const icons = {
  Linkedin, Facebook, Twitter, Website
}


const Contact = ({name, link, classes, translate}) =>
{
  const IconComponent = icons[capitalizeFirstLetter(name)]

  return (
    <li>
      <Button
        disabled={!link || !link.length}
        className={classes.button}
        variant="flat"
        href={link}
        target="_blank"
        >
         <IconComponent className={classNames(classes.leftIcon, classes.iconSmall)} />
         {translate(name)}
       </Button>
    </li>
  )
}

const enhance = compose(
  withStyles(styles),
  translate
)

const StyledContact = enhance(Contact)

function Contacts({profile, allowed, classes})
{
    const socials = Object.keys(profile).filter(item => allowed.indexOf(item) > -1)

    return (
        <div className={classes.listContainer}>
        <List component="ul" className={classes.contactList}>
        {socials.map((name, idx) => <StyledContact key={idx} name={name} link={profile[name]} />)}
        </List>
        </div>
    )
}

Contacts.defaultProps = {
  allowed : ["facebook", "twitter", "linkedin", "website"]
}

export default withStyles(styles)(Contacts)


// <Button href={_get(profile, "website")} variant="flat" color="default" size="medium">
//  <span style={{width: 20}} className="fa fa-facebook"></span>{' '}www
//</Button>
