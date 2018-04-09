
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose'
import classNames from 'classnames'
import withWidth from 'material-ui/utils/withWidth';


import Card, { CardContent, CardHeader } from 'material-ui/Card';
//import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from './MyAvatar'



const styles = {

  avatarContainer : {
   display: 'flex',
   justifyContent : 'center'
  },


  card: {
    width: '100%',
    maxWidth : 400
  },

  cardMobile : {

  },

  // media: {
  //   height: 200,
  // },

  bio : {
    marginTop : 10
  }
};

class Person extends React.PureComponent {


  // isMobile()
  // {
  //   const { width } = this.props;
  //   return width === "xs"
  // }

  render()
  {
    const { classes, avatar, title, subtitle, text, minimal } = this.props;

    return (

      <Card className={classNames(classes.card, {
        [classes.cardMobile] : minimal
      }
      )} elevation={0}>

      {/* <CardMedia
        className={classes.media}
        image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      /> */}

      <CardHeader

        avatar={
        <Avatar
          alt=""
          src={avatar}
          minimal={minimal}
        />}
        // title="test"
        // subheader="srest"
        className={classes.avatarContainer}
     />

      <CardContent>

        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>

        {subtitle && <Typography color="error" component="p">
          {subtitle}
        </Typography>}

        {!minimal && text ? <Typography component="p" className={classes.bio}>
          { text }
        </Typography> : null }

      </CardContent>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>


    );


  }


}

Person.defaultProps = {
  width : "md",
  minimal : true
}

Person.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar : PropTypes.string.isRequired,
  title : PropTypes.node,
  subtitle : PropTypes.node,
  text : PropTypes.node,
};

const enhance = compose(
  withStyles(styles),
//  withWidth()
)

export default enhance(Person);
