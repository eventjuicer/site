
import PropTypes from 'prop-types';

import compose from 'recompose/compose'
import { connect } from 'react-redux';


import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import withWidth from 'material-ui/utils/withWidth';

import {
  // dialogShow as dialogShowAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: 0,
    backgroundColor : '#f44336',
    height: '100vh',
//    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    height: '100vh',

    width: '90%',
    margin: '0 auto'
  },
  subheader: {
    width: '100%',
  },

  img : {

    //  filter : 'grayscale(100%)',
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


 const isBigScreen = (width) => {
   return width === "lg" || width === "xl"
 }

const Quote = (props) => (
  <div className="quote">

  <p><em> ale fajne targi! </em> </p>

<style jsx>{`
  .quote {
  background : #f44336
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

class Gallery extends React.Component {

  componentDidMount()
  {
    this.props.resourceFetchRequest("photos");
  }

  render()
  {
    const { classes, width, photos } = this.props;
    const cols = isBigScreen(width) ? 6 : 4;

    if(! (photos || []).length )
    {
      return <div className={classes.root}>..loading</div>
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList} cols={cols}>
          {photos.map((photo, idx) => {

            let image = (idx+1) % 3 === 0;


            return (<GridListTile key={idx} cols={image ? 2 : 1}>
              {image ? <img className={classes.img} src={photo.src} alt="gallery item" /> : <Quote />}
            </GridListTile>)
          })
        }
        </GridList>
      </div>
    );
  }

}



Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  width : PropTypes.string.isRequired,
//  photos : PropTypes.
};

const enhance = compose(
  withWidth(),
  withStyles(styles),
  connect((state) => ({photos : state.resources.photos}), {resourceFetchRequest : resourceFetchRequestAction})
)

export default enhance(Gallery);
