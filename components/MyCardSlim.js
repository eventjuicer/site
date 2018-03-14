


import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

import Typography from 'material-ui/Typography';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

function MediaControlCard(props) {
  const { classes, link , title, text} = props;

  return (
    <div>
      <Card className={classes.card}>

        <CardMedia
          className={classes.cover}
          image="/static/support.jpg"
          title="speak english"
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{title}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {text}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
              {link}
          </div>
        </div>

      </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaControlCard);
