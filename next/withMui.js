
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import getContext from '../material-ui/muiContext';
//import Header from '../components/Header';

function withMui(BaseComponent) {

  class App extends React.Component {
    componentWillMount() {
      this.pageContext = this.props.pageContext || getContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <Reboot />
          <BaseComponent {...this.props} />

        </MuiThemeProvider>
      );
    }
  }

  App.propTypes = {
    pageContext: PropTypes.object, // eslint-disable-line
  };

  App.defaultProps = {
    pageContext: null,
  };

  App.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return App;
}

export default withMui;
