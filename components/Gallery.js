
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose'


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
     height: 600,
  },
  subheader: {
    width: '100%',
  },

  quote : {

  }
});


/*

#container {
    	height: 200px;
    	width: 800px;
    	border: 1px solid #333;
    	overflow: hidden;
    	margin: 25px auto;
    }

    #box {
    	background: orange;
    	height: 180px;
    	width: 400px;
    	margin: 10px -400px;
    	-webkit-animation-name: move;
    	-webkit-animation-duration: 4s;
    	-webkit-animation-iteration-count: infinite;
    	-webkit-animation-direction: right;
    	-webkit-animation-timing-function: linear;
    }

    #box:hover {
    	-webkit-animation-play-state: paused;
    }

    @-webkit-keyframes move {
    	0% {
    		margin-left: -400px;
    	}
    	100% {
    		margin-left: 800px;
    	}
    }

*/


const tileData = [

    {
      id : 1,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23737928_2008366889173307_6272820656702188270_o.jpg?oh=093989e9bde97a4cbeedd0e67ae262cb&oe=5B4257C8",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
        id : 2,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23669145_2008368925839770_6215038177022110504_o.jpg?oh=aff0ee07d193af7986b4bb72fade7ce0&oe=5B4E52CC",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
        id : 3,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23668996_2008366882506641_675688552415028094_o.jpg?oh=ab6c4cf1823fea24221fe03484512163&oe=5B115474",
      title: 'Image',
      author: 'author',
      cols: 2,
    },

    {
        id : 4,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23736326_2008367955839867_1399555142944053959_o.jpg?oh=11e127bebd9b136eed0d6a93038095ce&oe=5B126CE6",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
        id : 5,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23737928_2008366889173307_6272820656702188270_o.jpg?oh=093989e9bde97a4cbeedd0e67ae262cb&oe=5B4257C8",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
        id : 6,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23669145_2008368925839770_6215038177022110504_o.jpg?oh=aff0ee07d193af7986b4bb72fade7ce0&oe=5B4E52CC",
      title: 'Image',
      author: 'author',
      cols: 2,
    },

    {
        id : 7,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23668996_2008366882506641_675688552415028094_o.jpg?oh=ab6c4cf1823fea24221fe03484512163&oe=5B115474",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
        id : 8,
      img: "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/23736326_2008367955839867_1399555142944053959_o.jpg?oh=11e127bebd9b136eed0d6a93038095ce&oe=5B126CE6",
      title: 'Image',
      author: 'author',
      cols: 1,
    },

 ];


 const isBigScreen = (width) => {
   return width === "lg" || width === "xl"
 }

const Quote = (props) => (
  <div className="quote">

  <p><em> ale fajne targi! </em> </p>

<style jsx>{`
  .quote {
  background : black
   padding: 3em
   width: 100%
   height: 100%
  }

  p {
     color: white
     fontSize: 2em
  }

  em {
      fontStyle: italic
  }
`}</style>
</div>)

const Gallery = ({ classes, width }) => {

  console.log(width)

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={isBigScreen(width) ? 6 : 3}>
        {tileData.map((tile, idx) => (
          <GridListTile key={tile.id} cols={tile.cols || 1}>
            {idx % 2 ==0 ? <img src={tile.img} alt={tile.title} /> : <Quote />}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  width : PropTypes.string.isRequired
};

const enhance = compose(
  withWidth(),
  withStyles(styles)
)

export default enhance(Gallery);
