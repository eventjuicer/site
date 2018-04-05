
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from './MyTabs'
import _get from 'lodash/get'
import { translate } from '../i18n'


import _mapValues from 'lodash/mapValues'
import _pickBy from 'lodash/pickBy'

import Contacts from './Contacts'

const styles = theme => ({

  container : {
      minHeight : 300,
  },
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  profile : {
    minHeight : 200,
    maxHeight : 400,
    overflow : 'auto',
    padding : 30,
    marginBottom: 30
  },
  htmlContainer : {
    fontFamily : "'Lato', 'Helvetica', sans-serif",
  }
});



function TabContainer({children, data, classes}) {

  if(new Object(data) === data )
  {
    return <div className={classes.htmlContainer} ><Contacts profile={ data } /></div>
  }

  return (
    <div className={classes.htmlContainer} dangerouslySetInnerHTML={{__html: data}}></div>
  );

}

const StyledTabContainer = withStyles(styles)(TabContainer);



const MyTab = translate(Tab);



class Company extends React.Component {

  state = {
    tab: null,
    execTabs : {}
  };

  componentDidMount()
  {
    const { company, tabs } = this.props
    const profile = _get(company, "profile")

    const execTabs = _pickBy(
      _mapValues(tabs, (value) => value(profile) ),
      function(value, key)
      {
        if(new Object(value)===value)
        {
          return Object.values(value).some(arrval => arrval)
        }
        return value
      }
    )

    const names = Object.keys(execTabs)
    const tab = names.length ? names[0] : null

    this.setState({tab, execTabs})

  }

  handleChange = (event, tab) => {
    this.setState({ tab });
  };

  render()
  {

    const { classes } = this.props
    const { execTabs, tab} = this.state;

    const filteredTabs = Object.keys(execTabs);


    return (

      <div className={classes.container}>

      <Tabs
          value={tab}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
          scrollable
          scrollButtons="auto"
      >

      {
        filteredTabs.map((name, idx) => <Tab key={idx} value={name} label={`companies.profile.${name}`} />)
      }

      </Tabs>

      {filteredTabs.map((name, idx) => tab === name && <div className={classes.profile}><StyledTabContainer data={ execTabs[name] } /></div> )}

    </div>

    )
  }
}

Company.defaultProps = {
  tabs : {
    about :     profile => _get(profile, "about"),
    expo :      profile => _get(profile, "expo"),
    products :  profile => _get(profile, "products"),
    contact :   company => ({
                          website : _get(company, "website"),
                          twitter : _get(company, "twitter"),
                          linkedin : _get(company, "linkedin"),
                          facebook : _get(company, "facebook")
                          })
  }
}

export default withStyles(styles)(Company);
