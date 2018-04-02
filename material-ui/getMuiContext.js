import { SheetsRegistry } from 'react-jss';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';


const theme = createMuiTheme({

  typography : {
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    button : {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
    }
  },
  palette: {
    primary: { main: red[700] },
    secondary: { main: grey[700] },
  },
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

function getMuiContext() {
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.INIT_MATERIAL_UI) {
    global.INIT_MATERIAL_UI = createPageContext();
  }

  return global.INIT_MATERIAL_UI;
}


export default getMuiContext
