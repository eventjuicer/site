import { SheetsRegistry } from 'react-jss';
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';


//https://material-ui.com/customization/default-theme/?expend-path=$.typography


const theme = createMuiTheme({
  typography: {
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    display4 : {
      fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    },
    display4 : {
      fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    },
    display3 : {
      fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    },
    headline : {
      fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    },
    subheading : {
      fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
      fontWeight : 700
    },
    title: {
      fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif"
    }
  },
  palette: {
    primary: { main: red[700] },
    secondary: { main: grey[700] }
  }
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

function getMuiContext() {
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

export default getMuiContext;
