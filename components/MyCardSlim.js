import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';

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

  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  avatar : {
    width : 150,
    height : 150
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

        <CardHeader
          avatar={
            <Avatar
            //  alt={opinion.person}
              src={imageSrc}
              className={classes.avatar}
            />
          }
        ></CardHeader>

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
