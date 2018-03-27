
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
  htmlContainer : {
    fontFamily : "'Lato', 'Helvetica', sans-serif",
    minHeight : 200,
    maxHeight : 400,
    overflow : 'auto',
    padding : 30,
    marginBottom: 30
  }
});



function TabContainer({children, html, classes}) {

  if(html)
  {
    return (
      <div className={classes.htmlContainer} dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
  return (
    <div>
      {children}
    </div>
  );
}

const StyledTabContainer = withStyles(styles)(TabContainer);



const MyTab = translate(Tab);



class Company extends React.Component {

  state = {
    tab: 'about',
    tabs : {}
  };

  componentDidMount()
  {
  //  this.selectTabForNonEmptyContent();
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

    const { company, classes, tabs } = this.props
    const { tab } = this.state;
    const profile = _get(company, "profile")

    const execTabs = _pickBy(
      _mapValues(tabs, (value) => value(profile) ),
      (value, key) => value
    )

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

    {tab === 'about' && <StyledTabContainer html={ execTabs["about"] } />}
    {tab === 'products' && <StyledTabContainer html={ execTabs["products"] } />}
    {tab === 'contact' && <StyledTabContainer><Contacts profile={ execTabs["contact"] } /></StyledTabContainer>}

    </div>

    )
  }
}

Company.defaultProps = {
  tabs : {
    about :     profile => _get(profile, "about"),
    products :  profile => _get(profile, "products"),
    contact :   company => ({facebook : company.facebook, linkedin : company.linkedin, twitter : company.twitter})
  }
}

export default withStyles(styles)(Company);
