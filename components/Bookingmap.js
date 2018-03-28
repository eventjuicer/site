
import dynamic from 'next/dynamic'
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import _get from 'lodash/get'


//import {translate} from '../i18n'


const BoothInfo = dynamic(import('./BoothInfo'))
const Person = dynamic(import('./PersonSlim'))
const TicketGroup = dynamic(import('./TicketGroup'))
const TicketGroupsInfo = dynamic(import('./TicketGroupsInfo'))


import Booth from './Booth';

import {
  dialogShow as dialogShowAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


const styles = (theme) => ({


  scrollableContainer : {
    overflowX: 'auto',
    overflowY: 'visible',
    height: 600,
    whiteSpace:'nowrap',
  },


  container : {

    position : 'relative',
    margin: '0px auto',
    padding: 0,
    width: 1170,
    height: '100%',
  },

  bg : {
    position: 'absolute',
    filter : 'grayscale(90%)',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex : 2,
  },

  booths : {
    position : 'relative',
    listStyleType : 'none',
    padding:0,
    margin:0,
    zIndex : 3,
  },

});



class Bookingmap extends React.PureComponent {

componentDidMount()
{
  this.props.resourceFetchRequest("bookingmap", false);
  this.props.resourceFetchRequest("formdata", true);
  this.props.resourceFetchRequest("ticketgroups", true);

}

getStatus(boothId)
{
  const { formdata } = this.props;
  return formdata[boothId];
}

getStatusShort(boothId)
{
  const status = this.getStatus(boothId);
  if(status)
  {
    return status.purchase.paid ? "sold" : "hold";
  }
  return false;
}

getBuyerInfo(boothId)
{
  const status = this.getStatus(boothId);
  if(status && "company" in status)
  {
    const cname2 =  _get(status, "company.profile.name", _get(status, "company.slug", ""));
    const logotype = _get(status, "company.logotype", "");

    return {cname2, logotype};
  }
  return false;
}

getTicketsForGroupId(groupId)
{
  const { ticketgroups } = this.props;
  return ticketgroups[groupId];
}

onBoothClick = (boothId, groupId, label) => {

    const { dialogShow } = this.props;

    const boothIsBlocked = this.getStatusShort(boothId);

    let modalTitle = "";
    let modalContent = "";
    let modalButtons = [];

    switch(boothIsBlocked)
    {
      case "hold":
        modalTitle = `Stoisko zarezerwowane`
        modalContent =  <BoothInfo />

      break;
      case "sold":
        modalTitle = `Stoisko wykupione`
        modalContent =  <BoothInfo formdata={ this.getStatus(boothId) } />

      break;
      default:
        /* THERE IS NOW FORMDATA FOR UNSOLD BOOTHS!!!! */
        modalTitle = `To stoisko jest wolne`
        modalContent = <div><TicketGroup
          noBookableTickets={<div></div>}
          label="Pule sprzedaży"
          group={this.getTicketsForGroupId(groupId)}
          formdata={ {id : boothId, ti : label} }
        />
        <Person title="event.sales.manual" />
      </div>;

    }

    dialogShow({
      title: modalTitle,
      content : modalContent,
      buttons : modalButtons
    });

}

isBoothSelected(boothId){

  const { selected, boothsSelected } = this.props;

  // const boothsSelected = Object.values(cart).filter(item => "formdata" in item && "id" in item.formdata).map(item => item.formdata.id)

  return (boothsSelected && boothsSelected.indexOf(boothId) > -1) || (selected && selected.indexOf(boothId) > -1);

}

render()
{
  const { booths, classes, zoom, height } = this.props;
  return (

<div
  className={classes.scrollableContainer}
  style={{
    height : height  * zoom
  }}
  >
{booths && ("mapsource" in booths) ?
<div
  className={classes.container}
  style={{
    width : 1170 * zoom,
  }}
  >

<img
  src={booths.mapsource}
  className={classes.bg}
 />

<ul className={classes.booths}>
      {booths.booths && booths.booths.map(booth =>
        <Booth
          styleId={1}
          zoom={zoom}
          selected={this.isBoothSelected(booth.id)}
          onClick={this.onBoothClick}
          status={this.getStatusShort(booth.id)}
          key={booth.id}
          buyer={this.getBuyerInfo(booth.id)}
          data={booth}
        />
      )}
</ul>
</div> : <div>...loading</div>
}
<TicketGroupsInfo />
</div>
)
}

}

Bookingmap.defaultProps = {
  zoom : 1,
  height : 600,
}

const enhance = compose(
//  translate,
  withStyles(styles),
  connect(state => ({
    boothsSelected : state.boothsSelected,
    formdata : state.resources.formdata,
    ticketgroups : state.resources.ticketgroups,
    booths : state.resources.bookingmap
  }), {
    dialogShow : dialogShowAction ,
    resourceFetchRequest : resourceFetchRequestAction
  }
  )
)

export default enhance(Bookingmap);
