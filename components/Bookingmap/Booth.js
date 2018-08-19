import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { onlyUpdateForKeys, compose } from 'recompose';




const styles = theme => ({
  booth: {
    position: 'absolute',
    display: 'block',

   backgroundColor: 'lightgreen',
   border: '1px solid green',
   color: 'black',

    zIndex: 20,
    borderRadius: 3,
    cursor: 'pointer',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    boxShadow: '1px 1px #555555',
    overflow: 'hidden',
    whiteSpace: 'wrap'
  },

  style1: {
    backgroundColor: "#5fe85d",
    color :  "#ffffff",
    borderColor: "#4bb749",
  },

  style2: {
    backgroundColor: "#55cf52",
    color :  "#ffffff",
    borderColor: "#409c3e"
  },

  style3: {
    backgroundColor: "#4bb749",
    color :  "#ffffff",
    borderColor: "#358234"
  },

  style4: {
    backgroundColor: "#409c3e",
    color :  "#ffffff",
    borderColor: "#004500"
  },

  style5: {
    backgroundColor: "#358234",
    color :  "#ffffff",
    borderColor: "#004500"
  },

  style6 : {
    backgroundColor: "#30bfca",
    color :  "#ffffff",
    borderColor: "#1e7980"

  },

  boothHold: {
    backgroundColor: 'yellow',
    color: 'red'
  },

  boothSold: {
    backgroundColor: '#D3D3D3',
    borderColor: '#999',
    color: '#666'
  },

  boothSelected: {
    backgroundColor: 'blue',
    color: 'white',
    border: '3px solid black'
  },

  boothText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 'normal',
    fontWeight: 600,
    fontFamily: 'verdana, arial, sans-serif',
    fontSize: 9
  },

  boothLogotype: {},

  cname: {
    display: 'block'
  }
});


const Booth = ({
  status,
  data,
  classes,
  onClick,
  selected,
  styleId,
  zoom,
  buyer,
  styling
}) => (
  <li
    onClick={() => onClick(data.id, data.g, data.ti)}
    className={classNames(classes.booth, classes[styling], {
      [classes.boothSold]: status === 'sold',
      [classes.boothHold]: status === 'hold',
      [classes.boothSelected]: selected
    })}
    style={{
      height: data.dh * zoom,
      width: data.dw * zoom,
      top: data.dt * zoom,
      left: data.dl * zoom,
      lineHeight: `${data.dh}px`,
    }}
  >
    <span
      className={classNames(classes.boothText, {
        [classes.boothLogotype]: buyer && 'logotype' in buyer && buyer.logotype
      })}
    >
      {data.ti}

      {buyer && 'cname2' in buyer && zoom > 1 ? (
        <span className={classes.cname}>{buyer.cname2}</span>
      ) : null}
    </span>
  </li>
);

Booth.defaultProps = {
  selected: false,
  zoom: 1
};

Booth.propTypes = {
  styling: PropTypes.string.isRequired,
  zoom: PropTypes.number,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const enhance = compose(
  onlyUpdateForKeys(['status', 'selected']),
  withStyles(styles)
);

export default enhance(Booth);
