import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {pure, compose} from 'recompose';

const styles = {
  card: {
  //  maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes, link, title, text } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
      //    image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {text}
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          {link}
        </CardActions>
      </Card>
    </div>
  );
}

const enhanced = compose(pure, withStyles(styles));

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default enhanced(SimpleMediaCard);
