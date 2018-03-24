


import PropTypes from 'prop-types';
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


    padding:0,
    margin:0,
    textAlign: 'center',
    boxShadow : '1px 1px #555555'
  },

  style1 : {},
  style2 : {},
  style3 : {},
  style4 : {},
  style5 : {},

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
    border: '3px solid black',

  },

  boothText : {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight : 'normal',
    fontWeight: 600,
    fontFamily : "verdana, arial, sans-serif",
    fontSize: 9,
  }

});



const Booth = ({status, data, classes, onClick, selected, styleId}) =>  (
      <li onClick={() => onClick(data.id, data.g, data.ti) } className={
        classNames(classes.booth, {
          [classes.boothSold] : status === "sold",
          [classes.boothHold] : status === "hold",
          [classes.boothSelected] : selected
        } )} style={{ height: data.dh, width: data.dw, top: data.dt, left: data.dl, lineHeight: `${data.dh}px`}}>
        <span className={classes.boothText}>{data.ti}</span>
      </li>
)

Booth.defaultProps = {
  selected : false
}

Booth.propTypes = {
  styleId: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick : PropTypes.func.isRequired,
  status : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  data : PropTypes.object.isRequired,
  classes : PropTypes.object.isRequired
};

const enhance = compose(
  onlyUpdateForKeys(['status', 'selected']),
  withStyles(styles)
);

export default enhance(Booth);
