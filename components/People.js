
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import classNames from 'classnames'
import withWidth from 'material-ui/utils/withWidth';


import _get from 'lodash/get'

import Card, { CardContent, CardHeader } from 'material-ui/Card';
//import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar'






import {processArrayData} from '../helpers'

import {
  // dialogShow as dialogShowAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'



const styles = {

  container : {
    display: 'flex',
    justifyContent : 'center',
    flexWrap: 'wrap',
    alignItems : 'baseline'

  },

  avatarContainer : {
   display: 'flex',
   justifyContent : 'center'
  },

  avatar : {
    width: 200,
    height: 200,
  },

  avatarMobile : {
    width: 100,
    height: 100,
  },

  avatarImg : {
     filter: 'grayscale(100%) contrast(115%)',
  },

  card: {
    width: 315,
  },

  cardMobile : {
    maxWidth : 180,
  },

  media: {
    height: 200,
  },

  bio : {
    marginTop : 10
  }
};

class People extends React.PureComponent {


  componentDidMount()
  {
    this.props.resourceFetchRequest("presenters", false)
  }

  isMobile()
  {
    const { classes, width } = this.props;

    return width === "xs"
  }

  renderItem(presenter)
  {

    const { classes, width } = this.props;


    return (
      <Card key={presenter.id} className={classNames(classes.card, {
        [classes.cardMobile] : this.isMobile()
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
          src={_get(presenter, "avatar")}
          classes={{
            root : classNames(classes.avatar,{
              [classes.avatarMobile] : this.isMobile()
            }),
            img : classes.avatarImg
          }}
        />}
        // title="test"
        // subheader="srest"
        className={classes.avatarContainer}
     />

      <CardContent>

        <Typography gutterBottom variant="headline" component="h2">
          {`${ _get(presenter, "fname") } ${ _get(presenter, "lname") }`}
        </Typography>

        <Typography component="p">
          { _get(presenter, "position") }
          {` @ `}
          <strong>{ _get(presenter, "cname2") }</strong>
        </Typography>

        <Typography component="p" className={classes.bio}>
          { _get(presenter, "bio") }
        </Typography>



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

    )

  }
  render()
  {
    const { classes, presenters, filter, limit, random } = this.props;

    const data = processArrayData(presenters, {filter, limit, random})


    return (
      <div className={classes.container}>

        {data.map(p => this.renderItem(p))}


      </div>
    );


  }


}

People.defaultProps = {
  presenters : [],
  width : "xs",
  filter : null,
  limit : false,
  random : false
}


People.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  withStyles(styles),
  withWidth(),
  connect(state => ({
    presenters : state.resources.presenters,
  }), {
  //  dialogShow : dialogShowAction ,
    resourceFetchRequest : resourceFetchRequestAction
  }
  )

)


export default enhance(People);
