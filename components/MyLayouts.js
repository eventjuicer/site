import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({


  middle : {
    display: 'flex',
    justifyContent: 'center',
  //  alignItems: 'center',
  }



})

const Centered = withStyles(styles)((props) => (

  <div className={props.classes.middle}>{props.children}</div>

))


const TwoColsLayout = ({left, right, leftCentered, rightCentered, leftSize}) =>  {

  const ls = parseInt(leftSize) ? leftSize : 6;
  const rs = 12 - ls;

  return (

    <Grid container spacing={16}>
        <Grid item xs={12} sm={ls} md={ls} lg={ls} xl={ls} >
          {leftCentered ? <Centered>{left}</Centered> : left }
        </Grid>

        <Grid item xs={12} sm={rs} md={rs} lg={rs} xl={rs} >
          {rightCentered ? <Centered>{right}</Centered> : right}
        </Grid>
    </Grid>

  )
}


TwoColsLayout.defaultProps = {
  leftCentered : false,
  rightCentered : false
}


export {TwoColsLayout, Centered}
