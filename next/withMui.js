import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import {getMuiContext} from '../material-ui';

//import Header from '../components/Header';

function withMui(BaseComponent) {

  class WithMui extends React.Component {

    constructor(props, context) {

      super(props, context);

      this.pageContext = this.props.pageContext || getMuiContext();
    }

    // componentWillMount() {
    //   this.pageContext = this.props.pageContext || getMuiContext();
    // }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <BaseComponent {...this.props} />

        </MuiThemeProvider>
      );
    }
  }

  WithMui.propTypes = {
    pageContext: PropTypes.object, // eslint-disable-line
  };

  // WithMui.defaultProps = {
  //   pageContext: null,
  // };

  WithMui.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return WithMui;
}

export default withMui;
