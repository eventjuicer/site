
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import _get from 'lodash/get'

import Contacts from './Contacts'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  htmlContainer : {
    fontFamily : "'Lato', 'Helvetica', sans-serif"
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

class Company extends React.Component {

  state = {
    tab: 'about',
    tabContent : {}
  };

  componentDidMount()
  {
    this.selectTabForNonEmptyContent();
  }

  handleChange = (event, tab) => {
    this.setState({ tab });
  };

  selectTabForNonEmptyContent()
  {
    const {company} = this.props

    const tabContent = {
      about : _get(company, "profile.about"),
      products : _get(company, "profile.products")
    };

    this.setState({ tabContent });
  }

  renderTabs()
  {

  }

  renderTabContent()
  {

  }

  render()
  {
    const {company, classes} = this.props
    const {tab, tabContent} = this.state

    const about = _get(company, "profile.about")
    const products = _get(company, "profile.products")
    const profile = _get(company, "profile")

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
        Object.keys(tabContent).map((name, idx) => <Tab key={idx} value={name} label={name} />)
      }

        <Tab value="contact" label="Kontakt" />
      </Tabs>

    {tab === 'about' && <StyledTabContainer html={about} />}
    {tab === 'products' && <StyledTabContainer html={products} />}
    {tab === 'contact' && <StyledTabContainer><Contacts profile={profile} /></StyledTabContainer>}

    </div>

    )
  }
}

export default withStyles(styles)(Company);
