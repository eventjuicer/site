import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { connect } from 'react-redux';

import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorderIcon from 'material-ui-icons/StarBorder';

import MyTypography from './MyTypography';
// import WidthAwareInfo from './WidthAwareInfo'
import {processArrayData} from '../helpers'
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
    backgroundColor: theme.palette.background.paper,
    paddingTop: 50
  },
  gridList: {

    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height : '100%'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    // background:
    //   'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  deSaturated : {
     filter: 'saturate(30%) contrast(115%)',
  }
});


class Gallery extends React.PureComponent {


  componentDidMount()
  {
    this.props.resourceFetchRequest("photos");
  }

  getSize(ret)
  {
    const { width } = this.props;

    let c;
    let h;

    switch(width)
    {
      case "xs":
        c = 1.5
        h = 300
      break
      case "sm":
        c = 1.5
        h = 450
      break
      case "md":
        c = 2.5
        h = 550
      break
      case "lg":
        c = 2.5
        h = 700
      break
      case "xl":
        c = 3.5
        h = 800
      break
      default:
        c = 3.5
        h = 800
    }

    const dims = {c, h, width}
   // console.log(dims)
    return dims[ret]

  }

  render()
  {
    const { photos, classes, label, title, width, random, limit } = this.props;

    let data = processArrayData(photos, {random, limit})

    return (
      <div className={classes.root}>


        {label && <MyTypography label={label} template="H2C" /> }
        {title && <MyTypography template="H2C">{title}</MyTypography> }

        {/* <WidthAwareInfo /> */}

        <GridList className={classes.gridList} cols={this.getSize("c")}  cellHeight={this.getSize("h")} >
          {data.map((tile, idx) => (
            <GridListTile key={tile.id}>
              <img src={tile.src} alt="" className={classes.deSaturated} />
              {/* <GridListTileBar
               title={tile.id}
               subtitle={<span>by: {tile.id}</span>}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              /> */}
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }


}

Gallery.defaultProps = {
  photos : [],
  limit : 10,
  random : true
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  withStyles(styles),
  withWidth(),
  connect((state) => ({photos : state.resources.photos}), {resourceFetchRequest : resourceFetchRequestAction})
)

export default enhance(Gallery);
