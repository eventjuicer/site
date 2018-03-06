import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({


  middle : {
    display: 'flex',
    justifyContent: 'center',
  //  alignItems: 'center',
  }



})

export const Centered = withStyles(styles)((props) => (
 
  <div className={props.classes.middle}>{props.children}</div>

))

export const TwoColsLayout = (props) =>  (
<Grid container spacing={16}>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
      {props.left}
    </Grid>

    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
      {props.right}
    </Grid>
</Grid>
)
