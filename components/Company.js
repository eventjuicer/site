
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import _get from 'lodash/get'
import Button from 'material-ui/Button'


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

function Contacts({profile})
{
    return (
      <ul>

        <li>
          <Button href={_get(profile, "website")} variant="flat" color="default" size="medium">
            <span style={{width: 20}} className="fa fa-facebook"></span>{' '}www
          </Button>
        </li>

           <li>
             <Button href={_get(profile, "facebook")} variant="flat" color="default" size="medium">
               <span style={{width: 20}} className="fa fa-facebook"></span>{' '}facebook
             </Button>
           </li>
           <li>
             <Button href={_get(profile, "twitter")} variant="flat" color="default" size="medium">
               <span style={{width: 20}} className="fa fa-twitter"></span>{' '}twitter
             </Button>
           </li>
           <li>
             <Button href={_get(profile, "linkedin")} variant="flat" color="default" size="medium">
               <span style={{width: 20}} className="fa fa-linkedin"></span>{' '}linkedin
             </Button>
           </li>
      </ul>
    )
}


function TabContainer({children, html}) {

  if(html)
  {
    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
  return (
    <div>
      {children}
    </div>
  );
}

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
        Object.keys(tabContent).map(name => <Tab value={name} label={name} />)
      }

        <Tab value="contact" label="Kontakt" />
      </Tabs>

    {tab === 'about' && <TabContainer html={about} />}
    {tab === 'products' && <TabContainer html={products} />}
    {tab === 'contact' && <TabContainer><Contacts profile={profile} /></TabContainer>}

    </div>

    )
  }
}

export default withStyles(styles)(Company);
