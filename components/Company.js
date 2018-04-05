
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
    overflowY : 'scroll',
    padding : 30,
    marginBottom: 30
  },
  tabsContainer : {

    margin : '0 auto',
    marginBottom : 10,

  },
  htmlContainer : {

    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily : theme.typography.fontFamily,
    lineHeight : theme.typography.pxToRem(23),

    "& p" : {

    },
    "& ul" : {
      marginLeft : 0,
      paddingLeft : 20
    },

    "& li:before" : {
      content: " ",
      backgroundSize: 'cover',
      backgroundImage: 'url("/static/check.png")',
      width: theme.typography.pxToRem(15),
      height: theme.typography.pxToRem(15),
      position: 'absolute',
      left: '-2rem'
    },

    "& blockquote" : {
      borderLeft : '10px solid #e0e0e0',
      color : 'rgba(0, 0, 0, 0.77)',
      fontStyle : 'italic',
      marginLeft : 10,
      paddingLeft : 10
    }
  },
  chip : {

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

      <div className={classes.tabsContainer}>
      <Tabs
          value={tab}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth={true}
          scrollable={true}
          scrollButtons="auto"
      >

      {
        filteredTabs.map((name, idx) => <Tab key={idx} value={name} label={`companies.profile.${name}`} />)
      }

      </Tabs>
      </div>

      {filteredTabs.map((name, idx) => tab === name && <div key={idx} className={classes.profile}><StyledTabContainer data={ execTabs[name] } /></div> )}

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
