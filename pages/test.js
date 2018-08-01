
import {connect} from "react-redux";

//import Layout from '../layouts/main';

import {translate} from '../i18n'

const SimpleComponent = ({translate}) => {
  return <div>{translate("asd")}</div>
}

const TranslatedSimpleComponent = translate(SimpleComponent)



class Test extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {
    return {  }
  }

  render()
  {

    return (

     <div>

     </div>




    )
  }

}

export default connect(null, null)(Test)
