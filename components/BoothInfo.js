


import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import find from 'lodash/find';


//import {translate} from '../i18n'
import SupportPeople from './SupportPeople'

import Card from './MyCardSlim'

import {resourceFetchRequest as resourceFetchRequestAction} from './redux/actions'


const styles = (theme) => ({

  root : {

  },

});



class BoothInfo extends React.Component {

  componentDidMount()
  {
    this.props.resourceFetchRequest("tickets");
  }


  render()
  {
    const {formdata} = this.props;

    return (
      <div>

      {formdata && <Card title="nazwa firmy" text="opis" link="link" />}

      <SupportPeople />

    </div>)
  }

}

const enhance = compose(
//  translate,
  withStyles(styles),
  connect(state => ({
    boothsSelected : state.boothsSelected,
  }), {resourceFetchRequest : resourceFetchRequestAction}
  )
)

export default enhance(BoothInfo);
