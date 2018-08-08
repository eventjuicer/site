import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardActions } from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import { DotsVertical } from 'mdi-material-ui';

//
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    //  maxWidth: 400,
  },

  actions: {
    display: 'flex'
  },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  //   marginLeft: 'auto',
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  avatar: {
    //backgroundColor: red[500],
    height: 80,
    width: 80
  }
});

const ScheduleItemPresenter = ({ classes, title, text, imageSrc, raised }) => {
  return (
    <Card className={classes.card} raised={raised} elevation={raised ? 1 : 0}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            className={classes.avatar}
            src={imageSrc}
          />
        }
        // action={
        //   <IconButton>
        //     <DotsVertical />
        //   </IconButton>
        // }
        title={title}
        subheader={text}
      />
    </Card>
  );
};

ScheduleItemPresenter.defaultProps = {
  raised: false
};

ScheduleItemPresenter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScheduleItemPresenter);

//
// <CardActions className={classes.actions} disableActionSpacing>
//   <IconButton aria-label="Add to favorites">
//   {/* <FavoriteIcon /> */}
//   </IconButton>
//   <IconButton aria-label="Share">
//   {/* <ShareIcon /> */}
//   </IconButton>
// </CardActions>
