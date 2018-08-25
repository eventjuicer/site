import React from 'react';

import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { translate } from '../../i18n'


import BoothInfo from './BoothInfo';
import Booth from './Booth';
import SalesInfo from './SalesInfo';
import OrderSteps from './OrderSteps'
import Legend from './Legend'
import Loader from './Loader'

import {BookingMapSelector} from '../../redux/selectors'

import {
  dialogShow,
  resourceFetchRequest,
  boothChecked
} from '../redux/actions';

import {getCompanyLogotype, getCompanyName} from '../../helpers'





const steps = [
  "choose_booth",
  "confirm",
  "pay",
  "access"
]


const styles = theme => ({
  scrollableContainer: {
    overflowX: 'auto',
    overflowY: 'visible',
    height: 800,
    whiteSpace: 'nowrap',
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
        <div>
           <OrderSteps items={steps} active={0} />
           <Legend />
        </div>
      <div
        className={classes.scrollableContainer}
        style={{
          height: height * zoom
        }}
      >
       
          <div
            className={classes.container}
            style={{
              width: 1170 * zoom
            }}
          >

           {bookingmap && 'mapsource' in bookingmap ? (
             <React.Fragment>
            <img src={bookingmap.mapsource} className={classes.bg} />

            <ul className={classes.booths}>
              {bookingmap.booths &&
                bookingmap.booths.map(booth => (
                  <Booth
                    groupId={ booth.g }
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
            </React.Fragment>) : <Loader />
         } 
         </div>
      </div>
        
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
