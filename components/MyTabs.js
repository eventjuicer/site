










import Tabs, { Tab as MuiTab  } from 'material-ui/Tabs'
import { translate } from '../i18n'


const Tab = translate(

  ({translate, label, ...other}) => (

  <MuiTab label={translate(label)} {...other} />

) )


export default Tabs;

export {Tab}
