
import { withStyles } from 'material-ui/styles';


const styles = (theme) => ({

  container : {

    //  height : '100vh',
    position : 'relative',
    margin: '0px auto',
    padding: 0,
    border: '1px solid rgb(234, 234, 234)',
    width: 1170,
    height: 600,
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat no-repeat',

  },

  booths : {
    position : 'relative',
    listStyleType : 'none',
    padding:0,
    margin:0,
  },

  booth : {
    position: 'absolute',
    display: 'block',
    backgroundColor: 'yellow',
    border: '1px solid orange',
    color: 'red',
    zIndex: 1001,
    borderRadius: 3,
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 10,
    padding:0,
    margin:0,
    textAlign: 'center',
  },

  boothText : {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight : 'normal'
  }

});

const Booth = ({data, classes}) => (
  <li onClick={() => alert(data.g) } className={classes.booth} style={{ height: data.dh, width: data.dw, top: data.dt, left: data.dl, lineHeight: `${data.dh}px`}}><span className={classes.boothText}>{data.ti}</span></li>
)

const StyledBooth = withStyles(styles)(Booth);

class Bookingmap extends React.Component {



render()
{

  const { data, classes } = this.props;

  return (
    <div className={classes.container} style={{background : `url(${data.mapsource})`}}>

      <ul className={classes.booths}>
      {data.booths && data.booths.map(booth => <StyledBooth key={booth.id} data={booth} />)}
      </ul>

  </div>
)
}

}


export default withStyles(styles)(Bookingmap);
