


import { withStyles } from 'material-ui/styles';
 // import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Button from 'material-ui/Button';
import compose from 'recompose/compose'
import {translate} from '../i18n'

import Card from './MyCardSlim'

const styles = theme => ({

 container : {
   // maxWidth : 700
 },
  icon: {
    height: 38,
    width: 38,
  },
});



const Person = ({classes, translate, title, text, name, avatar, phone, email}) => (

  <div className={classes.container}>
  <Card
    primary={false}
    title={translate(title)}
    text={
      <div>
      {translate(text, {person : name})}
      <p>{phone} <br/>{email}</p>
      </div>}
    imageSrc={avatar}
    link={<Button variant="raised" color="primary">{translate("common.chat")}</Button>}
   />
</div>)

Person.defaultProps = {
    title : "event.support.hello",
    text : "event.support.description",
    name : "Bartek Meller",
    avatar : "/static/support.jpg",
    phone : "+48 721 945 134",
    email : "hello@targiehandlu.pl"
}


const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(Person)
