
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
//    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
     height: 450,
  },
  subheader: {
    width: '100%',
  },
});

const tileData = [

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23737928_2008366889173307_6272820656702188270_o.jpg?oh=093989e9bde97a4cbeedd0e67ae262cb&oe=5B4257C8",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23669145_2008368925839770_6215038177022110504_o.jpg?oh=aff0ee07d193af7986b4bb72fade7ce0&oe=5B4E52CC",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23668996_2008366882506641_675688552415028094_o.jpg?oh=ab6c4cf1823fea24221fe03484512163&oe=5B115474",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23736326_2008367955839867_1399555142944053959_o.jpg?oh=11e127bebd9b136eed0d6a93038095ce&oe=5B126CE6",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23737928_2008366889173307_6272820656702188270_o.jpg?oh=093989e9bde97a4cbeedd0e67ae262cb&oe=5B4257C8",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23669145_2008368925839770_6215038177022110504_o.jpg?oh=aff0ee07d193af7986b4bb72fade7ce0&oe=5B4E52CC",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23668996_2008366882506641_675688552415028094_o.jpg?oh=ab6c4cf1823fea24221fe03484512163&oe=5B115474",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23736326_2008367955839867_1399555142944053959_o.jpg?oh=11e127bebd9b136eed0d6a93038095ce&oe=5B126CE6",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

 ];


function ImageGridList(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
