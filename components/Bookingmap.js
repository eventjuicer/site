
import dynamic from 'next/dynamic'
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import find from 'lodash/find';


//import {translate} from '../i18n'


const BoothInfo = dynamic(import('./BoothInfo'))
const TicketGroup = dynamic(import('./TicketGroup'))

import Booth from './Booth';

import {dialogShow, resourceFetchRequest} from './redux/actions'


const styles = (theme) => ({


  scrollableContainer : {

    overflowX: 'auto',
    overflowY: 'hidden',
    height: 600,
    whiteSpace:'nowrap',
  },
  container : {

    position : 'relative',
    margin: '0px auto',
    padding: 0,
    border: '1px solid rgb(234, 234, 234)',
    width: 1170,
    height: '100%',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat no-repeat',

  },

  booths : {
    position : 'relative',
    listStyleType : 'none',
    padding:0,
    margin:0,
  },

});



class Bookingmap extends React.Component {

state = {
  formdata : [],
}

componentDidMount()
{
  this.props.resourceFetchRequest("formdata");
}

getStatus(boothId)
{
  const { formdata } = this.props;
  return find(formdata, {id : boothId});
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

onBoothClick = (boothId, groupId) => {

    const { dialogShow, boothSelect, boothUnselect } = this.props;
    const boothIsBlocked = this.getStatusShort(boothId);

    let modalTitle = "";
    let modalContent = "";

    // console.log( boothId );
    // console.log( groupId );
    // console.log( status );

    switch(boothIsBlocked)
    {
      case "hold":
        modalTitle = `Stoisko zarezerwowane`
        modalContent =  <BoothInfo />
      break;
      case "sold":
        modalTitle = `Stoisko wykupione`
        modalContent =  <BoothInfo formdata={this.getStatus(boothId)} />
      break;
      default:
        modalTitle = `To stoisko jest wolne`
        modalContent = <TicketGroup groupId={groupId} boothId={boothId} />

    }



     dialogShow({title: modalTitle, content : modalContent});

}

isBoothSelected(boothId){

  const { boothsSelected, selected } = this.props;
  return boothsSelected.indexOf(boothId) > -1 || (selected && selected.indexOf(boothId) > -1);

}

render()
{

  const { booths, classes } = this.props;

  //console.log(this.props);

  return (

<div className={classes.scrollableContainer}>
  {booths && ("mapsource" in booths) &&
<div className={classes.container} style={{background : `url(${booths.mapsource})`}}>
<ul className={classes.booths}>
      {booths.booths && booths.booths.map(booth =>
        <Booth selected={this.isBoothSelected(booth.id)} onClick={this.onBoothClick} status={this.getStatusShort(booth.id)} key={booth.id} data={booth} />
      )}
</ul>

</div>
}
</div>
)
}

}

const enhance = compose(
//  translate,
  withStyles(styles),
  connect(state => ({
    boothsSelected : state.boothsSelected,
    formdata : state.resources.formdata
  }), {dialogShow, resourceFetchRequest}
  )
)

export default enhance(Bookingmap);
