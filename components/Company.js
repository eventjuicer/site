
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from './MyTabs'
import _get from 'lodash/get'
import { translate } from '../i18n'


import _mapValues from 'lodash/mapValues'
import _pickBy from 'lodash/pickBy'

import Contacts from './Contacts'

const styles = theme => ({
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
    tab: '',
    execTabs : {}
  };

  componentDidMount()
  {
    const { company, tabs } = this.props
    const profile = _get(company, "profile")

    const execTabs = _pickBy(
      _mapValues(tabs, (value) => value(profile) ),
      (value, key) => value
    )

    this.setState({execTabs})


  }

  handleChange = (event, tab) => {
    this.setState({ tab });
  };

  // selectTabForNonEmptyContent()
  // {
  //   const {company} = this.props
  //
  //   const tabContent = {
  //     about : _get(company, "profile.about"),
  //     products : _get(company, "profile.products")
  //   };
  //
  //   this.setState({ tabContent });
  // }


  render()
  {

    const { classes, tabs } = this.props
    const { execTabs, tab} = this.state;

    const filteredTabs = Object.keys(execTabs);


    return (

      <div>

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
    contact :   company => company
  }
}

export default withStyles(styles)(Company);
