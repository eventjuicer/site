


import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import find from 'lodash/find';
import _get from 'lodash/get';


//import {translate} from '../i18n'
import Person from './Person'

import Card from './MyCardSlim'

import {resourceFetchRequest as resourceFetchRequestAction} from './redux/actions'


const styles = (theme) => ({

  root : {

  },

});



class BoothInfo extends React.Component {

  // componentDidMount()
  // {
  //   this.props.resourceFetchRequest("tickets");
  // }


  render()
  {
    const {formdata} = this.props;



    return (
      <div>

      {formdata && <Card primary={false}
        title={_get(formdata, "company.profile.name")}
        text={_get(formdata, "company.profile.about")}
        image={_get(formdata, "company.profile.logotype")}
     />}

      <Person />

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
