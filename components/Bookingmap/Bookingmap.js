import React from 'react';

import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { translate } from '../../i18n'


import BoothInfo from './BoothInfo';
import TicketGroupsInfo from './TicketGroupsInfo';
import Booth from './Booth';
import SalesInfo from './SalesInfo';
import Legend from './Legend'

import {BookingMapSelector} from '../../redux/selectors'

import {
  dialogShow,
  resourceFetchRequest,
  boothChecked
} from '../redux/actions';

import {getCompanyLogotype, getCompanyName} from '../../helpers'


const styleMapping = {

  263 : "style1", //light
  264 : "style2", //standard
  265 : "style3", //hot
  266 : "style4", //superhot
  267 : "style5", //ultra
  268 : "style6", //grand
  269 : "style6"
}


const styles = theme => ({
  scrollableContainer: {
    overflowX: 'auto',
    overflowY: 'visible',
    height: 800,
    whiteSpace: 'nowrap'
  },

  container: {
    position: 'relative',
    margin: '0px auto',
    padding: 0,
    width: 1170,
    height: '100%'
  },

  bg: {
    position: 'absolute',
    filter: 'grayscale(90%)',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: 2
  },

  booths: {
    position: 'relative',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    zIndex: 3
  }
});

class Bookingmap extends React.PureComponent {


  componentDidMount(){
    const {resourceFetchRequest} = this.props
    resourceFetchRequest(["bookingmap", "ticketgroups", "formdata"])
  }

  getStatus(boothId) {
    const { formdata } = this.props;
    return boothId in formdata ? formdata[boothId] : {};
  }

  getStatusShort(boothId) {
    const { purchase } = this.getStatus(boothId);
    if (purchase) {
      return purchase.paid ? 'sold' : 'hold';
    }
    return false;
  }

  getBuyerInfo(boothId) {
    const { company } = this.getStatus(boothId);
    return { cname2 : getCompanyName(company), logotype : getCompanyLogotype(company) };
  }

  getTicketsForGroupId(groupId) {
    const { ticketgroups } = this.props;
    return groupId in ticketgroups ? ticketgroups[groupId] : {};
  }

  //temporary solution...normally we should have styling ID in ticket group map data!
  getStylingName(groupId){
    return groupId in styleMapping ? styleMapping[groupId] : "style1"
  }

  onBoothClick = (boothId, groupId, label) => {

    const { dialogShow, boothChecked, translate } = this.props;

    const boothIsBlocked = this.getStatusShort(boothId);

    let modalTitle = '';
    let modalContent = '';
    let modalButtons = [];


    switch (boothIsBlocked) {
      case 'hold':
        modalTitle = translate("event.sales.booths.hold");
        modalContent = <BoothInfo />;

        break;
      case 'sold':
        modalTitle = translate("event.sales.booths.sold");
        modalContent = <BoothInfo formdata={this.getStatus(boothId)} />;

        break;
      default:
        /* THERE IS NOW FORMDATA FOR UNSOLD BOOTHS!!!! */
        modalTitle = translate("event.sales.booths.free");
        modalContent = <SalesInfo groupId={groupId} boothId={boothId} label={label} />
    }

    dialogShow({
      title: modalTitle,
      content: modalContent,
      buttons: modalButtons
    });

    boothChecked(label);

  };

  isBoothSelected(boothId) {
    const { selected, boothsSelected } = this.props;

    // const boothsSelected = Object.values(cart).filter(item => "formdata" in item && "id" in item.formdata).map(item => item.formdata.id)

    return (
      (boothsSelected && boothsSelected.indexOf(boothId) > -1) ||
      (selected && selected.indexOf(boothId) > -1)
    );
  }

  render() {


    const { bookingmap, classes, zoom, height } = this.props;
    return (
      <div>
        <Legend />
      <div
        className={classes.scrollableContainer}
        style={{
          height: height * zoom
        }}
      >
        {bookingmap && 'mapsource' in bookingmap ? (
          <div
            className={classes.container}
            style={{
              width: 1170 * zoom
            }}
          >
            <img src={bookingmap.mapsource} className={classes.bg} />

            <ul className={classes.booths}>
              {bookingmap.booths &&
                bookingmap.booths.map(booth => (
                  <Booth
                    styling={this.getStylingName(booth.g)}
                    zoom={zoom}
                    selected={this.isBoothSelected(booth.id)}
                    onClick={this.onBoothClick}
                    status={this.getStatusShort(booth.id)}
                    key={booth.id}
                //    buyer={this.getBuyerInfo(booth.id)}
                    data={booth}
                  />
                ))}
            </ul>
          </div>
        ) : (
          <div>...loading</div>
        )}
      </div>
        <TicketGroupsInfo />
      </div>
    );
  }
}

Bookingmap.defaultProps = {
  zoom: 1,
  height: 750,
  boothsSelected : [],
  formdata : {},
  ticketgroups : {},
  bookingmap : []
};

const enhance = compose(
  translate,
  withStyles(styles),
  connect(
    (state) => BookingMapSelector(state),
    {dialogShow, resourceFetchRequest, boothChecked}
  )
);

export default enhance(Bookingmap);
