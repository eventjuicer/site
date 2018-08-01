import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardActions,
  //  CardContent,
  CardMedia
} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { pure, compose } from 'recompose';

const styles = {
  card: {
    //  maxWidth: 345,
  },

  centered: {
    //  textAlign : 'center'
  }
};

function SimpleMediaCard(props) {
  const { classes, media, src, name, id } = props;
  return (
    <Card elevation={0} raised={false} className={classes.card}>
      <CardMedia component={media} name={name} id={id} src={src} dupa={src} />
      {/* <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {text}
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent> */}
      {/* <CardActions className={classes.centered}>
          {link}
        </CardActions> */}
    </Card>
  );
}

const enhanced = compose(withStyles(styles));

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default enhanced(SimpleMediaCard);
