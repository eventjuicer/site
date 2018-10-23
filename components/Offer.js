
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import OfferLocationButton from './OfferLocationButton'

const styles = theme => ({
  card: {
    display: 'flex',
    backgroundColor: 'transparent'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  avatar : {
    maxWidth : 150,
   // height : 120
  },
  text : {
    fontFamily : theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: 400
  }
});

const Offer = ({ id, name, classes, text, imageSrc, primary }) => (

    <Card
    elevation={primary ? 2 : 0}
    raised={primary}
    className={classes.card}
    >
    <CardHeader
    avatar={
    <img
        //  alt={opinion.person}
        src={imageSrc}
        className={classes.avatar}
    />
    }
    />
    <div className={classes.details}>
        <CardContent className={classes.content}>
            <div className={classes.text} dangerouslySetInnerHTML={{__html : text}} />
        </CardContent>
        <CardActions className={classes.controls}>
            <OfferLocationButton id={id} name={name} />
        </CardActions>
    </div>
    </Card>

)  


Offer.defaultProps = {
  link: null,
  title: 'title',
  text: '',
  primary: false,
  imageSrc: ''
};

Offer.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Offer);
