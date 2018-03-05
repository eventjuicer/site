import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import {onlyUpdateForKeys, compose} from 'recompose';


const styles = (theme) => ({

  booth : {
    position: 'absolute',
    display: 'block',
    backgroundColor: 'lightgreen',
    border: '1px solid orange',
    color: 'red',
    zIndex: 1001,
    borderRadius: 3,
    cursor: 'pointer',
    fontFamily : 'Roboto, sans-serif',
    padding:0,
    margin:0,
    textAlign: 'center',
  },

  boothHold : {
    backgroundColor: 'yellow',
    color: 'red',
  },

  boothSold : {
    backgroundColor: '#D3D3D3',
    borderColor: '#999',
    color: '#666',
  },

  boothSelected : {
    backgroundColor: 'red',
    color: 'white',
  },

  boothText : {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight : 'normal',
    fontWeight: 600,
    fontSize: 10,
  }

});

const enhance = compose(
  onlyUpdateForKeys(['status', 'selected']),
  withStyles(styles)
);

const Booth = enhance(
  ({status, data, classes, onClick, selected}) =>  (
      <li onClick={() => onClick(data.id, data.g) } className={
        classNames({
          [classes.booth] : true,
          [classes.boothSold] : status === "sold",
          [classes.boothHold] : status === "hold",
          [classes.boothSelected] : selected
        } )} style={{ height: data.dh, width: data.dw, top: data.dt, left: data.dl, lineHeight: `${data.dh}px`}}>
        <span className={classes.boothText}>{data.ti}</span>
      </li>)
  );


export default Booth;
