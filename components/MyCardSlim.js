import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

import Typography from 'material-ui/Typography';

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
  cover: {
    width: 200,
    height: 200,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 15px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

function MyCardSlim(props) {
  const { classes, link, title, text, imageSrc, primary } = props;

  return (
    <div>
      <Card
        elevation={primary ? 2 : 0}
        raised={primary}
        className={classes.card}
      >
        <CardMedia className={classes.cover} image={imageSrc} />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{title}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {text}
            </Typography>
          </CardContent>
          {link && <div className={classes.controls}>{link}</div>}
        </div>
      </Card>
    </div>
  );
}

MyCardSlim.defaultProps = {
  link: null,
  title: 'title',
  text: '',
  primary: false,
  imageSrc: ''
};

MyCardSlim.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyCardSlim);
